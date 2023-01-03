import { ChangeEvent, useRef, useContext } from 'react';
import { PlacesContext } from '../context/places/PlacesContext';
import { SearchResults } from './SearchResults';

export const SearchBar = () => {

  const { searchPlacesByTerm } = useContext(PlacesContext);

  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current)
      clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      searchPlacesByTerm(event.target.value);
      console.log(event.target.value);
    }, 1000);
  };

  return (
    <div className="search-container"    >
      <input
        type="text"
        className="form-control"
        placeholder="Buscar Lugar"
        onChange={onQueryChanged}
      />
      <SearchResults />
    </div>
  );
};
