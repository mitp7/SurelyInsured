import React, { useState } from 'react';
import './index.css';

function SearchBar() {
   const [value, setValue] = useState("");
   return (
      <section className="Search">
         <div className="container-fluid">
            <div className="row justify-content-center">
               <h1 className="Search__title">TITLE</h1>
            </div>
            <form>
               <div className="row justify-content-center">
                  <div className="col-4">
                     <input
                        size="large"
                        className="Search__input"
                        placeholder="Enter Your Location"
                        value={value}
                        onChange={(event) => {
                           setValue(event.target.value);
                        }}
                     />
                  </div>
                  <div className="col-2">
                     <button
                        size="large"
                        type="primary"
                        htmlType="submit"
                        className="Search__submit"
                     >
                        GO
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </section>
   )
}

export default SearchBar;