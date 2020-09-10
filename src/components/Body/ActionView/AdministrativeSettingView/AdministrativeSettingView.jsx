import React, { Component } from "react";
import { Tabs } from "antd";
import ChangeJobDetailsTabPane from "./AdministrativeTabPaneView/ChangeJobDetailsTabPane.jsx";
import ChangeAttendanceTabPane from "./AdministrativeTabPaneView/ChangeAttendanceTabPane.jsx";
import UserManagementTabPane from "./AdministrativeTabPaneView/UserManagementTabPane.jsx";
import AnnouncementTabPane from "./AdministrativeTabPaneView/AnnouncementTabPane.jsx";

import "./AdministrativeSettingView.scss";

export default class AdministrativeSettingView extends Component {
  render() {
    const { TabPane } = Tabs;

    return (
      <div className="bis-dashboard-tab-view bis-admin-setting-tab-view">
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="Change Job Details" key="1">
            <ChangeJobDetailsTabPane />
          </TabPane>
          <TabPane tab="Change Attendance" key="2">
            <ChangeAttendanceTabPane />
          </TabPane>
          <TabPane tab="User Management" key="3">
            <UserManagementTabPane/>
          </TabPane>
          <TabPane tab="Announcement" key="4">
            <AnnouncementTabPane />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
