import React, {Component} from 'react';
import Grid from "../../../Common/Grid";

export default class JobInProgressTabPane extends Component {

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
																				headerName: "Status",
																				field: "status",
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
																				headerName: "Time Assigned",
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

				onChange(date, dateString) {
								console.log(date, dateString);
				}

				onGridReady(params) {
								this.gridApi = params.api;
								this.gridColumnApi = params.columnApi;
				}

				render()
				{
					const { columnDefs } = this.state;
						return <Grid
											columnDefs={columnDefs}
											defaultColDef={this.state.defaultColDef}
											rowData={this.state.rowData}
											onGridReady={this.onGridReady.bind(this)}/>
				}
}