import React from 'react';

const Dropdown = ({ opts, domClass, handleClick }) => {
  return (
    <div className={ domClass } >
      { opts.map( opt => {
        return <div
          data-val={ opt } 
          onClick={ handleClick }
          >{ opt } </div>;
      } ) }
    </div>
  );
};

export default Dropdown;