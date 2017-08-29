import React from 'react';

class SearchAddress extends React.Component {
  
  componentDidMount() {
    
  }
  
  render() {
    return (
      <div id='search-address'>
        <input 
          type='text' 
          placeholder='Address'/>
      </div>
    );
  }
  
}

export default SearchAddress;