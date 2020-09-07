import React, { Component } from "react";
import { Input, Row, Col, DatePicker, Button, Popover, Checkbox } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import Grid from "../../../../Common/Grid";

export default class ChangeJobDetailsTabPane extends Component {
  constructor(props) {
	super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "Job No",
          field: "jobNo",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Client",
          field: "client",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Title",
          field: "title",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Priority",
          field: "priority",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "CG Location",
          field: "cg_location",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Agreed Time",
          field: "agreedTime",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Due In",
          field: "dueIn",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Time Left",
          field: "timeLift",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Worked",
          field: "worked",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Operator",
          field: "operator",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Status",
          field: "status",
          sortable: true,
          filter: true,
          hide: false,
        }
      ],
      rowData: [
      ],
      defaultColDef: {
        minWidth: 100,
        enableValue: true,
        enableRowGroup: true,
        enablePivot: true,
        sortable: true,
        filter: true,
        resizable: true,
      },
    };
  }

  onChange(date, dateString) {
    console.log(date, dateString);
  }

  onGridReady(params) {
	this.gridApi = params.api;
	this.gridColumnApi = params.columnApi;
  }

  render() {
    const { columnDefs } = this.state;
    const height = '250px';

    return (
      <div>
        <Row className="bis-dashboard-search-row">
          <Col span={4}>
            <Input placeholder="Job No" />
          </Col>
          <Col span={4}>
            <Input placeholder="Client" />
          </Col>
          <Col span={4}>
            <DatePicker onChange={this.onChange} placeholder="From Date" />
          </Col>
          <Col span={4}>
            <DatePicker onChange={this.onChange} placeholder="To Date" />
          </Col>
          <Col>
            <Button
              type="primary"
              className="bis-gray-button"
              title="Search"
              icon={<SearchOutlined />}
            />
          </Col>
          <Col>
            <Button
              type="primary"
              className="bis-gray-button"
              title="Refresh"
              icon={<ReloadOutlined />}
            />
          </Col>
        </Row>

        <div>
          <Grid
            columnDefs={columnDefs}
            defaultColDef={this.state.defaultColDef}
            rowData={this.state.rowData}
            height={height}
			      onGridReady={this.onGridReady.bind(this)}
          />
        </div>
      </div>
    );
  }
}
