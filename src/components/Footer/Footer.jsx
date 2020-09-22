import React, { Component } from "react";
import { Col, Row } from "antd";
import "./Footer.scss";

const timeZones = {
  NewYork: "America/New_York",
  London: "Europe/London",
  Manila: "Asia/Manila",
  HongKong: "Asia/Hong_Kong",
  Tokyo: "Asia/Tokyo",
  India: "Asia/Kolkata",
};

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nyTime: "",
      londonTime: "",
      indiaTime: "",
      manilaTime: "",
      honkongTime: "",
      tokyoTime: "",
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  tick() {
    const nyDate = this.getDate(timeZones.NewYork);
    const londonDate = this.getDate(timeZones.London);
    const indiaDate = this.getDate(timeZones.India);
    const manilaDate = this.getDate(timeZones.Manila);
    const honkongDate = this.getDate(timeZones.HongKong);
    const tokyoDate = this.getDate(timeZones.Tokyo);

    this.setState({
      nyTime: nyDate.slice(nyDate.indexOf(",") + 1),
      londonTime: londonDate.slice(londonDate.indexOf(",") + 1),
      indiaTime: indiaDate.slice(indiaDate.indexOf(",") + 1),
      manilaTime: manilaDate.slice(manilaDate.indexOf(",") + 1),
      honkongTime: honkongDate.slice(honkongDate.indexOf(",") + 1),
      tokyoTime: tokyoDate.slice(tokyoDate.indexOf(",") + 1),
    });
  }

  getDate(timeZone) {
    const today = new Date();
    const date = today.toLocaleString("en-US", { timeZone: timeZone });
    return date;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <footer className="bis-footer">
        <Row>
		  <Col span={3}>
            <div></div>
          </Col>
          <Col span={4}>
            <div>New York : {this.state.nyTime}</div>
          </Col>
          <Col span={3}>
            <div>London : {this.state.londonTime}</div>
          </Col>
          <Col span={3}>
            <div>India : {this.state.indiaTime}</div>
          </Col>
          <Col span={3}>
            <div>Manila : {this.state.manilaTime}</div>
          </Col>
          <Col span={4}>
            <div>Hong Kong : {this.state.honkongTime}</div>
          </Col>
          <Col span={4}>
            <div>Tokyo : {this.state.tokyoTime}</div>
          </Col>
        </Row>
      </footer>
    );
  }
}
