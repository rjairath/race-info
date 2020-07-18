import React, { Component } from "react";
import { connect } from "react-redux";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
} from "reactstrap";
import { getGameSchedule } from "../actions/searchActions";
import { clearErrors } from "../actions/errorActions";
import PropTypes from "prop-types";

export class SearchInput extends Component {
  state = {
    query: "",
  };

  static propTypes = {
    getGameSchedule: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    this.props.clearErrors();
    this.props.getGameSchedule(this.state.query);
  };

  render() {
    return (
      <div>
        <InputGroup size="lg">
          <Input
            placeholder="Enter the game type"
            name="query"
            onChange={this.onChange}
          />
          <InputGroupAddon addonType="append">
            <Button onClick={this.onSubmit}>Search</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default connect(null, { getGameSchedule, clearErrors })(SearchInput);
