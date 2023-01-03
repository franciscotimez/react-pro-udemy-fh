import { PlacesProvider } from "./context";
import { HomeScreen } from "./screens";

import './styles.css'
import { MapProvider } from './context/map/MapProvider';

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  )
}
