import React, { Component } from "react";
import { connect } from "react-redux";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  Alert,
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
    error: PropTypes.object.isRequired,
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

        {this.props.error.msg ? (
          <Alert color="danger" className="mt-3">
            {this.props.error.msg}
          </Alert>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
});

export default connect(mapStateToProps, { getGameSchedule, clearErrors })(
  SearchInput
);
