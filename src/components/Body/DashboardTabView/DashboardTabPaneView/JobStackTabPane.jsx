import React, { Component } from "react";
import { Input, Row, Col, DatePicker, Button} from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import Grid from "../../../Common/Grid";
import ContextMenuRenderer from '../../../Common/ContextMenuRenderer.jsx';

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
          suppressColumnsToolPanel: false,
        },
        {
          headerName: "Job No",
          field: "jobNo",
          sortable: true,
          filter: true,
          hide: false,
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
