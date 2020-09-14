import React, { Component } from "react";
import { Row, Col, InputNumber, Button, Select } from "antd";
import { SaveOutlined } from "@ant-design/icons";

export default class TimeClockView extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    const { Option } = Select;

    return (
      <div>
        <Row className="bis-dashboard-search-row">
          <Col span={4}>
            <h3>
              <b>Record Time</b>
            </h3>
          </Col>
        </Row>

        <Row className="bis-dashboard-search-row bis-row">
          <Col span={2} className="bis-col">
            <span>Name</span>
          </Col>
          <Col span={6} className="bis-col">
            <Select onChange={this.handleChange.bind(this)}>
              <Option value="sanjaybarman">Sanjay Barman</Option>
              <Option value="sandeepshetty">Sandeep Shetty</Option>
            </Select>
          </Col>
          <Col span={4} className="bis-col">
            <span>Status:</span>
          </Col>
          <Col span={3} className="bis-col">
            <span>Logged In</span>
          </Col>
        </Row>

        <Row className="bis-dashboard-search-row bis-row">
          <Col span={2} className="bis-col">
            <span>Function</span>
          </Col>
          <Col span={6} className="bis-col">
            <Select
              placeholder="Operator"
              onChange={this.handleChange.bind(this)}
            >
              <Option value="sanjaybarman">Sanjay Barman</Option>
              <Option value="sandeepshetty">Sandeep Shetty</Option>
            </Select>
          </Col>
          <Col span={4} className="bis-col">
            <span>Available Hours</span>
          </Col>
          <Col span={3} className="bis-col">
            <InputNumber min={0} max={10} step={0.1} />
          </Col>
          <Col className="bis-col">
            <Button
              type="primary"
              className="bis-gray-button"
              title="Save"
              icon={<SaveOutlined />}
            />
          </Col>
        </Row>

        <Row className="bis-dashboard-search-row bis-row bis-align-center">
          <Col span={24}>
            <Button type="primary" className="bis-gray-button">
              Start Day
            </Button>
          </Col>
        </Row>

        <Row className="bis-dashboard-search-row">
          <Col span={4}>
            <h3> History </h3>
          </Col>
        </Row>

        <Row className="bis-dashboard-search-row bis-row">
          <Col span={3} className="bis-col">
            <span>Start Day:</span>
          </Col>
          <Col span={3} className="bis-col">
            <span>Stop Day:</span>
          </Col>
        </Row>
      </div>
    );
  }
}
