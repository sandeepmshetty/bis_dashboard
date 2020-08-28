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
                    headerName: "Req",
                    field: "req",
                    sortable: true,
                    filter: true
                }, {
                    headerName: "Job No",
                    field: "jobNo",
                    sortable: true,
                    filter: true

                }, {
                    headerName: "Researcher",
                    field: "researcher",
                    sortable: true,
                    filter: true
                }, {
                    headerName: "Client",
                    field: "client",
                    sortable: true,
                    filter: true
                }, {
                    headerName: "Region",
                    field: "region",
                    sortable: true,
                    filter: true
                }, {
                    headerName: "Sector",
                    field: "sector",
                    sortable: true,
                    filter: true
                }, {
                    headerName: "Status",
                    field: "status",
                    sortable: true,
                    filter: true
                }, {
                    headerName: "Job Type",
                    field: "jobType",
                    sortable: true,
                    filter: true
                }, {
                    headerName: "Team",
                    field: "team",
                    sortable: true,
                    filter: true
                }, {
                    headerName: "Details",
                    field: "details",
                    sortable: true,
                    filter: true
                }, {
                    headerName: "Comment",
                    field: "comment",
                    sortable: true,
                    filter: true
                }, {
                    headerName: "Time In",
                    field: "timeIn",
                    sortable: true,
                    filter: true
                }, {
                    headerName: "Time Due",
                    field: "timeDue",
                    sortable: true,
                    filter: true
                }, {
                    headerName: "Due In",
                    field: "dueIn",
                    sortable: true,
                    filter: true
                }, {
                    headerName: "ETR",
                    field: "etr",
                    sortable: true,
                    filter: true
                }
            ],
            rowData: [
                {
                    req: "38661",
                    jobNo: "348515",
                    researcher: 'Shashi',
                    client: 'Sandeep S',
                    region: 'EMEA',
                    sector: 'Other',
                    status: 'New',
                    jobType: 'CI-Other',
                    team: 'IMS-Mumbai',
                    details: '',
                    comment: '',
                    timeIn: '20 Aug 2020 19:48',
                    timeDue: '20 Aug 2020 19:48',
                    dueIn: '',
                    etr: ''
                }, {
                    req: "386614",
                    jobNo: "348511",
                    researcher: 'Sanjay',
                    client: 'Shashi S',
                    region: 'EMEA',
                    sector: 'Other',
                    status: 'New',
                    jobType: 'CI-Other',
                    team: 'IMS-Mumbai',
                    details: '',
                    comment: '',
                    timeIn: '20 Aug 2020 19:48',
                    timeDue: '20 Aug 2020 19:48',
                    dueIn: '',
                    etr: ''
                }, {
                    req: "386611",
                    jobNo: "348509",
                    researcher: 'Sanjay',
                    client: 'Sandeep S',
                    region: 'EMEA',
                    sector: 'Other',
                    status: 'New',
                    jobType: 'CI-Other',
                    team: 'IMS-Mumbai',
                    details: '',
                    comment: '',
                    timeIn: '20 Aug 2020 19:48',
                    timeDue: '20 Aug 2020 19:48',
                    dueIn: '',
                    etr: ''
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
            <div className="bis-dashboard-tab-view">
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Job Stack" key="1">
                        <div
                            className="ag-theme-alpine"
                            style={{
                            height: '450px',
                            width: '100%'
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
