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

const WHITE_LISTED_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/'];
window.WHITE_LISTED_CHARS = WHITE_LISTED_CHARS;
const initialState = {
  address: '',
  checkIn: '',
  checkOut: '',
};


class Search extends React.Component {
  
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
  
  handleDateChange(field) {
    return e => {
      if (e.target.value.split('').every( char => WHITE_LISTED_CHARS.includes(char) )) {
        this.setState({ 
          [field]: e.target.value,
        });
      }
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    // this.props.fetchVenues(this.state);
    this.props.fetchVenues({
      street: this.state.address,
      check_in: this.state.checkIn,
      check_out: this.state.checkOut,  
    });
  }
  
  render() {
    return (
      <div id='search'>
        <form onSubmit={ this.handleSubmit }>
          <div className='search-form-inner-wrapper'>
            <button display='none' type='submit'></button>
            <div className='search-input-wrapper'>
              <input
                type='text' 
                value={ this.state.address }
                onChange={ this.handleAddressChange }
                placeholder='Search anywhere'
              />
            </div>
            <div className='search-input-wrapper'>
              <input 
                type='text' 
                value={ this.state.checkIn }
                onChange={ this.handleDateChange('checkIn') }
                placeholder='Check in (m/d/Y)'
              />
            </div>
            <div className='search-input-wrapper'>
              <input 
                type='text' 
                value={ this.state.checkOut }
                onChange={ this.handleDateChange('checkOut') }
                placeholder='Check out (m/d/Y)'
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
  
}

export default connect(null, mapDispatchToProps)(Search);