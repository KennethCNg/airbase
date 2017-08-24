import React from 'react';

const ModalErrors = (props) => {
  return (
    <div className='modal-errors-wrapper'>
      <div className='modal-errors-icon'>
        <img src={ window.staticImages.bang } />
      </div>
      <div className='modal-errors'>
        { props.errors }
      </div>
    </div>
  );
};

export default ModalErrors;