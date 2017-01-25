'use strict';
import * as ReactBootstrap from 'react-bootstrap';

const React = require('react'),
  form = ReactBootstrap.Form,
  FormGroup = ReactBootstrap.FormGroup,
  FormControl = ReactBootstrap.FormControl,
  HelpBlock = ReactBootstrap.HelpBlock,
  Button = ReactBootstrap.Button,
  ControlLabel = ReactBootstrap.ControlLabel,
  storage = require('../../helpers/storage');

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
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  };

  handleChange(e) {

    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <form >
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
      </form>
    );
  }
};

module.exports = messageEditor;
