import { Map, Marker, Popup } from "mapbox-gl";
import { MapContext } from './MapContext';
import { useReducer, useContext, useEffect } from 'react';
import { mapReducer } from "./mapReducer";
import { PlacesContext } from '../';

export interface MapState {
  isMapReady: boolean;
  map?: Map;
  markers: Marker[];
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
  markers: []
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MapProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);
  const { places } = useContext(PlacesContext);

  useEffect(() => {
      state.markers.forEach(marker => marker.remove());

      const newMarkers: Marker[] = [];

      console.log({ places });

      for (const place of places) {
        const [lng, lat] = place.center;
        const popup = new Popup().setHTML(`
        <h6>${place.text_es}</h6>
      <p>${place.place_name_es}</p>
      `);

        const newMarker = new Marker({
          color: 'red'
        })
          .setLngLat([lng, lat])
          .setPopup(popup)
          .addTo(state.map!);

        newMarkers.push(newMarker);
      }

      // todo: limpiar polylines

      dispatch({ type: 'setMarkers', payload: newMarkers });
  }, [places]);

  const setMap = (map: Map) => {

    const myLocationPopup = new Popup().setHTML('<h4>Aqui estoy</h4>');

    new Marker({
      color: 'red'
    })
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopup)
      .addTo(map);

    dispatch({ type: "setMap", payload: map });
  };

  return (
    <MapContext.Provider value={{
      ...state,
      // Methods
      setMap
    }}>
      {children}
    </MapContext.Provider>
  );
};
