import React from 'react';
import ReactDOM from 'react-dom';
import pikaday from 'pikaday';

class DatePicker extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onSelect, className } = this.props; 
    const picker = new pikaday({
      field: document.querySelector(`.${className}`),
      format: 'MM/DD/YYYY',
      onSelect: onSelect,
    });
  }

  render() {
    const { className, name, onChange, value } = this.props; 
    return (
        <input type="text" 
          className={ className }
          name={ name }
          onChange={ onChange }
          value={ value }
          placeholder='mm/dd/yyyy'
        />
    );
  }
  
}

export default DatePicker;