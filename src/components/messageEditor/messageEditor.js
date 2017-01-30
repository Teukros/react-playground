'use strict';
import * as ReactBootstrap from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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

  width: "3em"
}
const buttonDivHolder = {
  display: "flex",
  justifyContent: "center"
}


class messageEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:"Random post"

    };
    this.handleChange = this.handleChange.bind(this);
  };

  // getValidationState() {
  //   const length = this.state.value.length;
  //   if (length > 10)
  //     return 'success';
  //   else if (length > 5)
  //     return 'warning';
  //   else if (length > 0)
  //     return 'error';
  //   };

  handleChange(e) {

    this.setState({value: e.target.value});

  };

  render() {
    return (
      <div>
        <div style={divForInputStyle}>
          <TextField id="text-field-controlled"  onChange={this.handleChange} hintText="Place for your suggestions" id="formBasicText" inputStyle={inputStyle} textareaStyle={inputStyle} multiLine={true} style={mainAreaInputStyle}  underlineShow={true} underlineStyle={underlineStyle} floatingLabelFixed={true} floatingLabelText="Working example with validation" floatingLabelStyle={floatingLabelStyle}   />

        </div>
        <div style={buttonDivHolder}>
          <RaisedButton label="Wyślij"  primary={true} style={sendButtonStyle} labelStyle={sendButtonStyle}
                  onTouchTap= {storage.addPost(this.state.value) }
           />
        </div>
      </div>

    /* <form >
      <FormGroup
        controlId="formBasicText"
        validationState={this.getValidationState()}
      >
        <ControlLabel>Working example with validation</ControlLabel>
        <FormControl
          type="text"
          value={this.state.value}
          placeholder="Enter text"
          onChange={this.handleChange}

        />
        <FormControl.Feedback />
        <Button type="button"
                onClick={ () => { storage.addPost(this.state.value)} }
          >
          Submit
        </Button>
        <HelpBlock>Validation is based on string length.</HelpBlock>
      </FormGroup>
    </form> */

    );
  }
};

module.exports = messageEditor;
