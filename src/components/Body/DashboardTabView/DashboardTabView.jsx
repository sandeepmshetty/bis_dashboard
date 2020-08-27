import React, {Component} from 'react';
import {Tabs} from 'antd';

import './DashboardTabView.scss';

export default class DashboardTabView extends Component {

    callback(key){
        console.log(key);
    }

    render()
    {
        const {TabPane} = Tabs;

        return (
            <div className="bis-action-view">
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Job Stack" key="1">
                        Content of Job Stack
                    </TabPane>
                    <TabPane tab="Jobs in progress" key="2">
                        Content of Jobs in progress
                    </TabPane>
                    
                    <TabPane tab="My Jobs" key="3">
                        Content of My Jobs
                    </TabPane>
                    <TabPane tab="Archive" key="4">
                        Content of Archive
                    </TabPane>
                    <TabPane tab="Team Capacity" key="5">
                        Content of Team Capacity
                    </TabPane>
                </Tabs>
            </div>
        );
    }
};
