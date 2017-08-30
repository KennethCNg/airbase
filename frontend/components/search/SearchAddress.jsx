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
  street: '',
};

class SearchAddress extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    
  }
  
  handleChange(e) {
    this.setState({ street: e.target.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchVenues(this.state);
  }
  
  render() {
    return (
      <div id='search-address'>
        <form onSubmit={ this.handleSubmit }>
          <input 
            onChange={ this.handleChange }
            value={ this.state.street }
            type='text'
            placeholder='Search anywhere' />
        </form>
      </div>
    );
  }
  
}

export default connect(null, mapDispatchToProps)(SearchAddress);