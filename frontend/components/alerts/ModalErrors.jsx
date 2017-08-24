import React from 'react';

const ModalErrors = (props) => {
  return (
    <div className='modal-errors-wrapper'>
      <div className='modal-errors-icon'>
        <img src={ window.staticImages.bang } />
      </div>
      <div className='modal-errors'>
        <ul>
          { 
            props.errors.map( (err, idx) => {
              return <li key={ idx }>{ err }</li>;
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default ModalErrors;