import React, { Component } from "react";
import { Input, Row, Col, DatePicker, Button} from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import Grid from "../../../Common/Grid";
import ContextMenuRenderer from '../../../Common/ContextMenuRenderer.jsx';
import {LinkOutlined } from "@ant-design/icons";

export default class JobStackTabPane extends Component {
  constructor(props) {
	super(props);
    this.state = {
      columnDefs: [
        {
          width: 30, 
          minWidth:30,
          pinned: 'left',
          cellRenderer: 'contextMenuRenderer',
          editable: false,
          sortable: false,
          filter: false,
        },
        {
          headerName: "Req",
          field: "req",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Job No",
          field: "jobNo",
          sortable: true,
          filter: true,
          hide: false,
          cellRenderer: function(params) {
            let keyData = params.data.jobNo;
            let newLink = 
            `<span><span role="img" aria-label="link" class="anticon anticon-link"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="link" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"></path></svg></span><a href= https://ag-grid.com/
            target="_blank">${keyData}</a></span>`;
            return newLink;
        }
        },
        {
          headerName: "Researcher",
          field: "researcher",
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
          headerName: "Region",
          field: "region",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Sector",
          field: "sector",
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
        },
        {
          headerName: "Job Type",
          field: "jobType",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Team",
          field: "team",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Details",
          field: "details",
          sortable: true,
          filter: true,
          hide: false,
          cellRenderer: function(params) {
            let newLink = 
            `<span role="img" aria-label="info-circle" class="anticon anticon-info-circle"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg></span>`;
            return newLink;
        },
      },
        {
          headerName: "Comment",
          field: "comment",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Time In",
          field: "timeIn",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Time Due",
          field: "timeDue",
          sortable: true,
          filter: true,
          hide: false,
          cellClass: function(params) { return ('bis-maroon-cell'); }
        },
        {
          headerName: "Due In",
          field: "dueIn",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "ETR",
          field: "etr",
          sortable: true,
          filter: true,
          hide: false,
        },
      ],
      rowData: [
        {
          req: "38661",
          jobNo: "348515",
          researcher: "Shashi",
          client: "Sandeep S",
          region: "EMEA",
          sector: "Other",
          status: "New",
          jobType: "CI-Other",
          team: "IMS-Mumbai",
          details: "",
          comment: "",
          timeIn: "20 Aug 2020 19:48",
          timeDue: "20 Aug 2020 19:48",
          dueIn: "",
          etr: "",
        },
        {
          req: "386614",
          jobNo: "348511",
          researcher: "Sanjay",
          client: "Shashi S",
          region: "EMEA",
          sector: "Other",
          status: "New",
          jobType: "CI-Other",
          team: "IMS-Mumbai",
          details: "",
          comment: "",
          timeIn: "20 Aug 2020 19:48",
          timeDue: "20 Aug 2020 19:48",
          dueIn: "",
          etr: "",
        },
        {
          req: "386611",
          jobNo: "348509",
          researcher: "Sanjay",
          client: "Sandeep S",
          region: "EMEA",
          sector: "Other",
          status: "New",
          jobType: "CI-Other",
          team: "IMS-Mumbai",
          details: "",
          comment: "",
          timeIn: "20 Aug 2020 19:48",
          timeDue: "20 Aug 2020 19:48",
          dueIn: "",
          etr: "",
        },
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
      context: { componentParent: this },
      frameworkComponents: {
        contextMenuRenderer: ContextMenuRenderer,
      }
    };
  }

  onChange(date, dateString) {
    console.log(date, dateString);
  }
  
  onGridReady(params) {
	this.gridApi = params.api;
	this.gridColumnApi = params.columnApi;
  }

  methodFromParent(cell, e){
    console.log(cell + '!' + e.currentTarget.textContent);
  };

  render() {
    const { columnDefs, defaultColDef, rowData, frameworkComponents, context } = this.state;

    return (
      <div>
        <Row className="bis-dashboard-search-row">
          <Col span={3}>
            <Input placeholder="Req No" />
          </Col>
          <Col span={3}>
            <Input placeholder="Job No" />
          </Col>
          <Col span={3}>
            <Input placeholder="Client" />
          </Col>
          <Col span={3}>
            <Input placeholder="Researcher" />
          </Col>
          <Col>
            <DatePicker onChange={this.onChange} placeholder="From Date" />
          </Col>
          <Col>
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
            defaultColDef={defaultColDef}
            rowData={rowData}
            context={context}
            frameworkComponents={frameworkComponents}
			      onGridReady={this.onGridReady.bind(this)}
          />
        </div>
      </div>
    );
  }
}
