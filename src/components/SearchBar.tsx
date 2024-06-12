import { ChangeEvent, useContext, useRef } from 'react';
import { PlacesContext } from '../context';
import { SearchResult } from './SearchResult';



export const SearchBar = () => {

  const { searchPlacesByTerm } = useContext( PlacesContext );

  const debounceRef = useRef<NodeJS.Timeout>(  );

  const onQueryChanged = ( event: ChangeEvent<HTMLInputElement> ) => {
    const query = event.target.value;

    if ( debounceRef.current ) {
      clearTimeout( debounceRef.current );
    }

    debounceRef.current = setTimeout( () => {
      //TODO: Buscar o ejecutar consulta
      searchPlacesByTerm( query );

      // console.log( 'debounceRef value:', query );
    }, 350 );
  }

  return (
    <div className=" search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar lugar..."
        onChange={ onQueryChanged }
      />

      <SearchResult />
    </div>
  )
}

