import React, { Component } from "react";
import { Input, Row, Col, DatePicker, Button, Popover, Checkbox } from "antd";
import { AgGridReact } from "ag-grid-react";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import Grid from "../../../Common/Grid";

export default class JobStackTabPane extends Component {
  constructor(props) {
	super(props);
    this.state = {
      columnDefs: [
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
      hideShowColumns: [
        {
          headerName: "Req",
          hide: true,
        },
        {
          headerName: "Job No",
          hide: true,
        },
        {
          headerName: "Researcher",
          hide: true,
        },
        {
          headerName: "Client",
          hide: true,
        },
        {
          headerName: "Region",
          hide: true,
        },
        {
          headerName: "Sector",
          hide: true,
        },
        {
          headerName: "Status",
          hide: true,
        },
        {
          headerName: "Job Type",
          hide: true,
        },
        {
          headerName: "Team",
          hide: true,
        },
        {
          headerName: "Details",
          hide: true,
        },
        {
          headerName: "Comment",
          hide: true,
        },
        {
          headerName: "Time In",
          hide: true,
        },
        {
          headerName: "Time Due",
          hide: true,
        },
        {
          headerName: "Due In",
          hide: true,
        },
        {
          headerName: "ETR",
          hide: true,
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
    };
  }

  onChange(date, dateString) {
    console.log(date, dateString);
  }

  onColumnHideCheckChange(column, e) {
    console.log(`checked = ${e.target.checked}`);
    const columns = this.state.hideShowColumns;

    for (let i = 0; i < columns.length; i++) {
      const col = columns[i];

      if (column.headerName === col.headerName) {
        col.hide = e.target.checked;
        break;
      }
    }

    this.setState({ hideShowColumns: columns });
  }

  onColumnHideSaveClick(e) {
    for (let i = 0; i < this.state.hideShowColumns.length; i++) {
      const hideShowColumn = this.state.hideShowColumns[i];
      for (let j = 0; j < this.state.columnDefs.length; j++) {
        const column = this.state.columnDefs[j];
        if (hideShowColumn.headerName === column.headerName) {
          column.hide = !hideShowColumn.hide;
          this.gridColumnApi.setColumnVisible(
            column.field,
            hideShowColumn.hide
          );
        }
      }
    }

    this.gridApi.setColumnDefs(this.state.columnDefs);
    this.setState({ columnDefs: this.state.columnDefs });
  }

  onColumnHideClick(e) {
    for (let j = 0; j < this.state.columnDefs.length; j++) {
      const column = this.state.columnDefs[j];
      for (let i = 0; i < this.state.hideShowColumns.length; i++) {
        const hideShowColumn = this.state.hideShowColumns[i];
        if (hideShowColumn.headerName === column.headerName) {
          hideShowColumn.hide = !column.hide;
        }
      }
    }

    this.setState({ hideShowColumns: this.state.hideShowColumns });
  }

  getColumnList() {
    return (
      <div>
        {this.state.hideShowColumns.map((column) => (
          <li key={column.field}>
            <div>
              <Checkbox
                checked={column.hide}
                onChange={(e) => this.onColumnHideCheckChange(column, e)}
              >
                {column.headerName}
              </Checkbox>
            </div>
          </li>
        ))}
        <Button
          type="primary"
          className="bis-red-button"
          title="Save"
          onClick={(e) => this.onColumnHideSaveClick(e)}
        >
          Save
        </Button>
      </div>
    );
  }

  onGridReady(params) {
	this.gridApi = params.api;
	this.gridColumnApi = params.columnApi;
  }

  render() {
    const columnList = this.getColumnList();
    const { columnDefs } = this.state;

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
            defaultColDef={this.state.defaultColDef}
            rowData={this.state.rowData}
			onGridReady={this.onGridReady.bind(this)}
          />
        </div>
      </div>
    );
  }
}
