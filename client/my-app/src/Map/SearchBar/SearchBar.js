import React, { useState } from 'react';
import './index.css';

function SearchBar() {
   const [value, setValue] = useState("");
   return (
      <section className="Search">
         <div className="Search__container">
            <div className="Search__title__container">
               <h1 className="Search__title">TITLE</h1>
            </div>
            <form>
               <div className="Search__bar">
                  <input
                     size="large"
                     className="Search__input"
                     placeholder="Enter Your Location"
                     value={value}
                     onChange={(event) => {
                        setValue(event.target.value);
                     }}
                  />
                  <button
                     size="large"
                     type="primary"
                     htmlType="submit"
                     className="Search__submit"
                  >
                     GO
                  </button>
               </div>
            </form>
         </div>
      </section>
   )
}

export default SearchBar;
