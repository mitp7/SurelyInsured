import React from 'react';
import usePlacesAutocomplete, {
   getGeocode,
   getLatLng,
} from "use-places-autocomplete";
import {
   Combobox,
   ComboboxInput,
   ComboboxPopover,
   ComboboxList,
   ComboboxOption,
} from "@reach/combobox";
import './index.css';

function SearchBar({ center, className }) {
   const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
   } = usePlacesAutocomplete({
      requestOptions: {
         location: { lat: () => center.lat, lng: () => center.lng },
         radius: 200000,
      }
   });
   return (
      <div className={className}>
         <Combobox
            onSelect={async (address) => {
               setValue(address, false);
               clearSuggestions();
               try {
                  const results = await getGeocode({ address });
                  const { lat, lng } = await getLatLng(results[0]);
                  // centerTo({ lat, lng });
                  // save({ lat, lng, address });
                  console.log(lat, lng);
               }
               catch {
                  console.log("ERROR");
               }
            }}
         >
            <ComboboxInput
               data-testid="search-bar"
               value={value}
               onChange={(event) => {
                  setValue(event.target.value);
               }}
               disabled={!ready}
               placeholder="Enter an address"
            />
            <ComboboxPopover>
               <ComboboxList>
                  {status === "OK" &&
                     data.map(({ place_id, description }) => (
                        <ComboboxOption key={place_id} value={description} />
                     ))}
               </ComboboxList>
            </ComboboxPopover>
         </Combobox>
      </div>
   );
}

export default SearchBar;
