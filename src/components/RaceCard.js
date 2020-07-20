import React, { Component } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardHeader,
  Collapse,
  CardBody,
} from "reactstrap";

export class RaceCard extends Component {
  state = {
    collapse: -1,
  };

  toggle = (e) => {
    let index = e.target.dataset.event;
    this.setState({
      collapse: this.state.collapse === Number(index) ? -1 : Number(index),
    });
  };

  render() {
    const { race } = this.props;

    return (
      <div>
        <Row>
          <Col sm="12" className="mt-3">
            <Card>
              <CardHeader>Race Information</CardHeader>
              <CardBody>
                <Row>
                  <Col xs="2">Race Number</Col>
                  <Col xs="auto">{race.number}</Col>
                </Row>
                <Row>
                  <Col xs="2">Race Name</Col>
                  <Col xs="auto">{race.name}</Col>
                </Row>
                <Row className="mb-3">
                  <Col xs="2">Race Start Time</Col>
                  <Col xs="auto">{race.startTime}</Col>
                </Row>
                {race.starts.map((item, index) => {
                  return (
                    <Card key={index}>
                      <CardBody>
                        <Row>
                          <Col xs="2">Start Number</Col>
                          <Col xs="auto">{item.number}</Col>
                        </Row>
                        <Row>
                          <Col xs="2">Horse Name</Col>
                          <Col xs="auto">{item.horse.name}</Col>
                        </Row>
                        <Row>
                          <Col xs="2">Driver Name</Col>
                          <Col xs="auto">
                            {item.driver.firstName + " " + item.driver.lastName}
                          </Col>
                        </Row>
                        <Button
                          color="primary"
                          onClick={this.toggle}
                          data-event={index}
                          className="mt-2 mb-2"
                        >
                          Show More
                        </Button>
                        <Collapse isOpen={this.state.collapse == index}>
                          <Row>
                            <Col xs="2">Trainer Name</Col>
                            <Col xs="auto">
                              {item.horse.trainer.firstName +
                                " " +
                                item.horse.trainer.lastName}
                            </Col>
                          </Row>
                          <Row>
                            <Col xs="2">Horse's Father</Col>
                            <Col xs="auto">
                              {item.horse.pedigree.father.name}
                            </Col>
                          </Row>
                        </Collapse>
                      </CardBody>
                    </Card>
                  );
                })}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RaceCard;
