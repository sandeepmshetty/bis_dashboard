import React, {Component} from 'react';
import {Tabs, Row, Col} from 'antd';
import JobStackTabPane from './JobStackTabPane.jsx';
import JobInProgressTabPane from './JobInProgressTabPane.jsx';
import MyJobsTabPane from './MyJobsTabPane.jsx';
import ArchiveTabPane from './ArchiveTabPane.jsx';
import TeamCapacityTabPane from './TeamCapacityTabPane.jsx';

import './DashboardTabView.scss';

export default class DashboardTabView extends Component {

    callback(key) {
        console.log(key);
    }

    render()
    {
        const {TabPane} = Tabs;

        return (
            <div className="bis-dashboard-tab-view">
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Job Stack" key="1">
                        <JobStackTabPane/>
                    </TabPane>
                    <TabPane tab="Jobs in progress" key="2">
                        <JobInProgressTabPane/>
                    </TabPane>
                    <TabPane tab="My Jobs" key="3">
                        <MyJobsTabPane/>
                    </TabPane>
                    <TabPane tab="Archive" key="4">
                        <ArchiveTabPane/>
                    </TabPane>
                    <TabPane tab="Team Capacity" key="5">
                        <TeamCapacityTabPane/>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
};
