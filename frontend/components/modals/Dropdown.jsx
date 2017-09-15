import React from 'react';
import ReactDOM from 'react-dom';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);
  }
  
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }
  
  handleClick(e) {
    if(ReactDOM.findDOMNode(this).contains(e.target)) {
      this.props.handleClick();
    } else {
      this.props.handleClickAway();
    }
  }
  
  render() {
    const { domClass, opts, vals, handleClick } = this.props;
    return (
      <div className='dropdown-wrapper'>
        <div className='dropdown'>
          { opts.map( (opt, idx) => {
            return <div
              className='dropdown-option'
              key={ idx }
              data-val={ vals[idx] } 
              onClick={ handleClick }
              >{ opt }</div>;
          } ) }
        </div>
      </div>
    );
  }
  
}

export default Dropdown;