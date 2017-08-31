import React from 'react';
import { connect } from 'react-redux';
import { fetchVenues } from '../../actions/venuesActions';

const mapStateToProps = state => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchVenues: params => {
      dispatch(fetchVenues(params));
    }
  };
};

const initialState = {
  address: '',
};

class SearchAddress extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    
  }
  
  handleAddressChange(e) {
    this.setState({
      address: e.target.value,
    });
  }
  
  handleDateChange(e) {
    
  }
  
  handleSubmit(e) {
    e.preventDefault();
    // this.props.fetchVenues(this.state);
    this.props.fetchVenues({
      street: this.state.address,
    });
  }
  
  render() {
    return (
      <div id='search-address'>
        <form onSubmit={ this.handleSubmit }>
          <div className='ven-book-sec ven-book-date-wrapper'>
            <input  
              name='search_address'
              type='text' 
              value={ this.state.address }
              onChange={ this.handleAddressChange }
              placeholder='search anywhere'
            />
            <input 
              className='ven-book-check-out' 
              name='search_date'
              type='text' 
              // value={ this.state.checkOut }
              // onChange={ this.handleDateChange('checkOut') }
              placeholder='mm/dd/yyyy'
            />
            <button display='none' type='submit'></button>
          </div>
        </form>
      </div>
    );
  }
  
}

export default connect(null, mapDispatchToProps)(SearchAddress);