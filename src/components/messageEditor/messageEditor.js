'use strict';
import * as ReactBootstrap from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const React = require('react'),
  form = ReactBootstrap.Form,
  FormGroup = ReactBootstrap.FormGroup,
  FormControl = ReactBootstrap.FormControl,
  HelpBlock = ReactBootstrap.HelpBlock,
  Button = ReactBootstrap.Button,
  ControlLabel = ReactBootstrap.ControlLabel,
  storage = require('../../helpers/storage');

const inputStyle = {
  color: "black",
  textAlign: "center"

}

const mainAreaInputStyle = {
  marginLeft: "5em"
}

const divForInputStyle = {
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  paddingTop: "1em"
}

const underlineStyle = {
  borderColor: "grey"
}

const floatingLabelStyle = {
  color: "black",
  textAlign: "center"
}
const sendButtonStyle = {
  color: "white",
  display: "block",
  width:"3em"
}
const buttonDivHolder={
  display:"flex",
  justifyContent:"center"
}

class messageEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'enter something here'
    };
    this.handleChange = this.handleChange.bind(this);
  };

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10)
      return 'success';
    else if (length > 5)
      return 'warning';
    else if (length > 0)
      return 'error';
    };

  handleChange(e) {

    this.setState({value: e.target.value});
  };

  render() {
    return (
<div>
      <div style={divForInputStyle}>
        <TextField id="text-field-controlled" value={this.state.value} onChange={this.handleChange} id="formBasicText" defaultValue="dupa" inputStyle={inputStyle} textareaStyle={inputStyle} multiLine="true" style={mainAreaInputStyle} underlineShow="true" underlineStyle={underlineStyle} floatingLabelFixed="true" floatingLabelText="Working example with validation" floatingLabelStyle={floatingLabelStyle}/>


      </div>
      <div style={buttonDivHolder}>
              <RaisedButton label="Wyślij" primary={true} style={sendButtonStyle} labelStyle={sendButtonStyle}/>
      </div>
</div>

    );
  }
};

module.exports = messageEditor;
