import React, {Component} from 'react';
import {AgGridReact} from 'ag-grid-react';
import Grid from "../../../Common/Grid";

export default class TeamCapacityTabPane extends Component {

				constructor(props)
				{
								super(props);
								this.state = {
												columnDefs: [
																{
																				headerName: "Name",
																				field: "name",
																				sortable: true,
																				filter: true
																}, {
																				headerName: "Region",
																				field: "region",
																				sortable: true,
																				filter: true

																}, {
																				headerName: "Skill Level",
																				field: "skillLevel",
																				sortable: true,
																				filter: true
																}, {
																				headerName: "Status",
																				field: "status",
																				sortable: true,
																				filter: true
																}, {
																				headerName: "Job Number",
																				field: "jobNumber",
																				sortable: true,
																				filter: true
																}, {
																				headerName: "Sector",
																				field: "sector",
																				sortable: true,
																				filter: true
																}, {
																				headerName: "Since",
																				field: "since",
																				sortable: true,
																				filter: true
																}, {
																				headerName: "Role",
																				field: "role",
																				sortable: true,
																				filter: true
																}, {
																				headerName: "Next Pickup Time",
																				field: "nextPickupTime",
																				sortable: true,
																				filter: true
																}, {
																				headerName: "Available Time",
																				field: "availableTime",
																				sortable: true,
																				filter: true
																}
												],
												rowData: [
																{
																				name: "38661",
																				region: "348515",
																				skillLevel: 'Shashi',
																				status: 'Sandeep S',
																				jobNumber: 'EMEA',
																				sector: 'Other',
																				since: 'New',
																				role: 'CI-Other',
																				nextPickupTime: 'IMS-Mumbai',
																				availableTime: ''
																}, {
																				name: "38661",
																				region: "348515",
																				skillLevel: 'Shashi',
																				status: 'Sandeep S',
																				jobNumber: 'EMEA',
																				sector: 'Other',
																				since: 'New',
																				role: 'CI-Other',
																				nextPickupTime: 'IMS-Mumbai',
																				availableTime: ''
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
								const {columnDefs} = this.state;

								return <div>

																<Grid
																				columnDefs={columnDefs}
																				defaultColDef={this.state.defaultColDef}
																				rowData={this.state.rowData}
																				onGridReady={this
																				.onGridReady
																				.bind(this)}/>
								</div>
				}
}