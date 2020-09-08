import React, { Component } from "react";
import { Input, Row, Col, DatePicker, Button, Popover, Select } from "antd";
import Grid from "../../../../Common/Grid";
import { SaveOutlined } from "@ant-design/icons";

export default class UserManagementTabPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "Name",
          field: "name",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "ACL",
          field: "acl",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Role",
          field: "role",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Location",
          field: "location",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Language",
          field: "language",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "User ID",
          field: "userId",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "Skill Level",
          field: "skillLevel",
          sortable: true,
          filter: true,
          hide: false,
        },
        {
          headerName: "",
          field: "",
          cellRenderer: function (params) {
            return (
              '<span class="rag-element bis-grid-icon"><span role="img" aria-label="save" class' +
              '="anticon anticon-save"><svg viewBox="64 64 896 896" focusable="false" class="" ' +
              'data-icon="save" width="1em" height="1em" fill="currentColor" aria-hidden="true"' +
              '><path d="M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 1' +
              "4.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-" +
              "18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32" +
              "h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64" +
              ".5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35" +
              '.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"></path></svg></span><span role="img" a' +
              'ria-label="delete" class="anticon anticon-delete"><svg viewBox="64 64 896 896" f' +
              'ocusable="false" class="" data-icon="delete" width="1em" height="1em" fill="curr' +
              'entColor" aria-hidden="true"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4' +
              " 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72" +
              "zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29." +
              "8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17." +
              '7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg></span><' +
              "/span>"
            );
          },
        },
      ],
      rowData: [
        {
          name: "Tito George",
          acl: "ACL-3",
          role: "OPER",
          location: "Cochin",
          language: "English",
          userId: "gerogeit",
          skillLevel: "3",
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

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  render() {
    const { Option } = Select;
    const { columnDefs } = this.state;
    const height = "250px";

    return (
      <div>
        <Row className="bis-dashboard-search-row">
          <Col span={4}>
            <Select
              placeholder="Region"
              onChange={this.handleChange.bind(this)}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Col>
        </Row>

        <Grid
          columnDefs={columnDefs}
          defaultColDef={this.state.defaultColDef}
          rowData={this.state.rowData}
          height={height}
          onGridReady={this.onGridReady.bind(this)}
        />

       
        <Button type="primary" className="bis-gray-button" title="Refresh">
            Add
        </Button>
      </div>
    );
  }
}
