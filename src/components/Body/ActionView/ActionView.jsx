import React, { Component } from "react";
import { Button, Row, Modal } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import {
  SearchOutlined,
  ReloadOutlined,
  MailOutlined,
} from "@ant-design/icons";
import AdministrativeSettingView from "../../Body/ActionView/AdministrativeSettingView/AdministrativeSettingView.jsx";
import TimeClockView from "../../Body/ActionView/TimeClockView/TimeClockView.jsx";
import "./ActionView.scss";

export default class ActionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      timeClockModalVisible: false,
    };
  }

  showModal() {
    this.setState({ visible: true });
  }

  showTimeClockModal() {
    this.setState({ timeClockModalVisible: true });
  }

  handleOk(e) {
    this.setState({ visible: false });
  }

  handleCancel(e) {
    this.setState({ visible: false });
  }

  handleTimeClickModalOk(e) {
    this.setState({ timeClockModalVisible: false });
  }

  handleTimeClickModalCancel(e) {
    this.setState({ timeClockModalVisible: false });
  }

  onClick() {
    window.open("http://localhost:3000/CreateJobView", "_blank");
  }

  render() {
    return (
      <div className="bis-action-view">
        <div className="bis-button-group">
          <Button
            type="primary"
            className="bis-red-button"
            onClick={this.onClick}
          >
            Create Job
          </Button>
          <Button
            type="primary"
            className="bis-gray-button"
            icon={<ClockCircleOutlined />}
            onClick={this.showTimeClockModal.bind(this)}
          >
            Time Clock
          </Button>
          <Button
            type="primary"
            className="bis-gray-button"
            title="Search"
            icon={<ReloadOutlined />}
          />
          <Button
            type="primary"
            className="bis-gray-button"
            title="Refresh"
            icon={<MailOutlined />}
          />
          <Row className="pull-right">
            <span className="bis-action-label">
              Announcement: <b>On</b>
            </span>

            <span className="bis-action-label">
              Work Stack Co-ordinator-Primary: <b>Sandeep Shetty</b>
            </span>

            <span className="bis-action-label">
              Secondary: <b>Sandeep Shetty</b>
            </span>

            <a className="bis-anchor" onClick={this.showModal.bind(this)}>
              Administrative Settings
            </a>
          </Row>
        </div>
        <Modal
          width={900}
          title="Administrative Settings"
          visible={this.state.visible}
          footer={null}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this)}
        >
          <AdministrativeSettingView />
        </Modal>

        <Modal
          width={800}
          title="Time Clock"
          visible={this.state.timeClockModalVisible}
          footer={null}
          onOk={this.handleTimeClickModalOk.bind(this)}
          onCancel={this.handleTimeClickModalCancel.bind(this)}
        >
          <TimeClockView />
        </Modal>
      </div>
    );
  }
}
