import React, {Component} from 'react';
import {Tabs} from 'antd';
import {AgGridReact} from 'ag-grid-react';

import './DashboardTabView.scss';

export default class DashboardTabView extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            columnDefs: [
                {
                    headerName: "Make",
                    field: "make"
                }, {
                    headerName: "Model",
                    field: "model"
                }, {
                    headerName: "Price",
                    field: "price"
                }
            ],
            rowData: [
                {
                    make: "Toyota",
                    model: "Celica",
                    price: 35000
                }, {
                    make: "Ford",
                    model: "Mondeo",
                    price: 32000
                }, {
                    make: "Porsche",
                    model: "Boxter",
                    price: 72000
                }
            ]
        }
    }

    callback(key) {
        console.log(key);
    }

    render()
    {
        const {TabPane} = Tabs;

        return (
            <div className="bis-action-view">
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Job Stack" key="1">
                        <div
                            className="ag-theme-alpine"
                            style={{
                            height: '250px',
                            width: '600px'
                        }}>
                            <AgGridReact columnDefs={this.state.columnDefs} rowData={this.state.rowData}></AgGridReact>
                        </div>
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
