import React, { Component } from "react";
import { Row, Col, DatePicker, Button, Popover, Select } from "antd";
import { SearchOutlined, ReloadOutlined, SaveOutlined } from "@ant-design/icons";

export default class ChangeAttendanceTabPane extends Component {
  constructor(props) {
    super(props);
  }

  onChange(date, dateString) {
    console.log(date, dateString);
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
            <h3> Search Criteria </h3>
          </Col>
        </Row>

        <Row className="bis-dashboard-search-row">
          <Col span={4}>
            <Select
              placeholder="Operator"
              onChange={this.handleChange.bind(this)}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Col>
          <Col span={4}>
            <DatePicker onChange={this.onChange} placeholder="From Date" />
          </Col>
          <Col>
            <Button
              type="primary"
              className="bis-gray-button"
              title="Search"
              icon={<SearchOutlined  />}
            />
          </Col>
          <Col>
            <Button type="primary" className="bis-gray-button" title="Refresh">
              Previous Record
            </Button>
          </Col>
          <Col>
            <Button type="primary" className="bis-gray-button" title="Refresh">
              Next Record
            </Button>
          </Col>
        </Row>

        <Row>
          <Col span={4}>
            <h3> Attendance History </h3>
          </Col>
        </Row>
      </div>
    );
  }
}
