import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RaceCard from "./RaceCard";
import { Card, CardHeader, CardBody, Col } from "reactstrap";

export class RaceInfoContainer extends Component {
  static propTypes = {
    search: PropTypes.object.isRequired,
  };

  render() {
    const { loading, gameData, gameSchedule } = this.props.search;
    if (!loading && Object.keys(gameData).length > 0 && gameData.races) {
      return (
        <div>
          <Card className="mt-3">
            <CardHeader>Game Type</CardHeader>
            <CardBody>
              <Col xs="auto">{gameSchedule.betType}</Col>
            </CardBody>
          </Card>

          {gameData.races.map((item, index) => {
            return <RaceCard key={index} race={item} />;
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps, null)(RaceInfoContainer);
