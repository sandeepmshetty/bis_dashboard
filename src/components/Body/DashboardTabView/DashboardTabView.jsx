import React, {Component} from 'react';
import {Tabs} from 'antd';
import JobStackTabPane from './JobStackTabPane.jsx';
import JobInProgressTabPane from './JobInProgressTabPane.jsx';

import './DashboardTabView.scss';

export default class DashboardTabView extends Component {

    callback(key) {
        console.log(key);
    }

    render()
    {
        const {TabPane} = Tabs;

        const myJob = <TabPane tab="My Jobs" key="3">
            Content of My Jobs
        </TabPane>;
        const archive = <TabPane tab="Archive" key="4">
            Content of Archive
        </TabPane>;
        const teamCapacity = <TabPane tab="Team Capacity" key="5">
            Content of Team Capacity
        </TabPane>;
        return (
            <div className="bis-dashboard-tab-view">
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Job Stack" key="1"><JobStackTabPane/></TabPane>
                    <TabPane tab="Jobs in progress" key="2"><JobInProgressTabPane/></TabPane>
                    {myJob}
                    {archive}
                    {teamCapacity}
                </Tabs>
            </div>
        );
    }
};
