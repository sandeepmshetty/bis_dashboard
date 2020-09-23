/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Button, Popover, Checkbox, Col, Row } from "antd";
import { AgGridReact } from "ag-grid-react";
import PropTypes from "prop-types";
import { MenuOutlined } from "@ant-design/icons";
import "./Grid.scss";

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideShowColumns: [],
    };
  }

  componentDidMount() {
    let hideShowColumn = [];

    this.props.columnDefs.forEach((column) => {
      if(!column.pinned)
      hideShowColumn.push({ headerName: column.headerName });
    });

    this.setState({ hideShowColumns: hideShowColumn });
  }

  getColumnList() {
    return (
      <div>
        {this.state.hideShowColumns.map((column) => (
          <li key={column.field}>
            <div>
              <Checkbox
                className="bis-grid-checkbox"
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
          className="bis-red-button bis-popover-save-button"
          title="Save"
          onClick={(e) => this.onColumnHideSaveClick(e)}
        >
          Save
        </Button>
      </div>
    );
  }

  onColumnHideSaveClick(e) {
    for (let i = 0; i < this.state.hideShowColumns.length; i++) {
      const hideShowColumn = this.state.hideShowColumns[i];
      for (let j = 0; j < this.props.columnDefs.length; j++) {
        const column = this.props.columnDefs[j];
        if (hideShowColumn.headerName === column.headerName) {
          column.hide = !hideShowColumn.hide;
          this.grid_ColumnApi.setColumnVisible(
            column.field,
            hideShowColumn.hide
          );
        }
      }
    }

    this.grid_Api.setColumnDefs(this.props.columnDefs);
    this.grid_Api.sizeColumnsToFit();
    this.setState({ columnDefs: this.props.columnDefs });
  }

  onGridReady(params, props) {
    this.grid_Api = params.api;
    this.grid_ColumnApi = params.columnApi;

    const cols = this.grid_ColumnApi.getAllColumns();
    const allColumnIds = [];

    cols.forEach(function (col) {
      allColumnIds.push(col.colId);
    });

    this.grid_ColumnApi.autoSizeColumns(allColumnIds, true);
    this.grid_Api.sizeColumnsToFit();
    this.grid_Api.setHeaderHeight(31);

    props.onGridReady(params);
  }

  onColumnHideClick(e) {
    for (let j = 0; j < this.props.columnDefs.length; j++) {
      const column = this.props.columnDefs[j];
      for (let i = 0; i < this.state.hideShowColumns.length; i++) {
        const hideShowColumn = this.state.hideShowColumns[i];
        if (hideShowColumn.headerName === column.headerName) {
          hideShowColumn.hide = !column.hide;
        }
      }
    }

    this.setState({ hideShowColumns: this.state.hideShowColumns });
  }

  onColumnHideCheckChange(column, e) {
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

  render() {
    const columnList = this.getColumnList();
    const { columnDefs, defaultColDef, rowData, context, frameworkComponents } = this.props;
    return (
      <Row className="bis-grid">
        <Col span={23}>
          <div
            className="ag-theme-alpine"
            style={{
              height: this.props.height,
              width: "100%",
            }}
          >
            <AgGridReact
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              context={context}
              onGridReady={(params) => this.onGridReady(params, this.props)}
              frameworkComponents= {frameworkComponents}
              rowData={rowData}
            ></AgGridReact>
          </div>
        </Col>
        <Col className="bis-toolbar">
          <Popover
            placement="rightTop"
            title={"Hide/Show Columns"}
            content={columnList}
            trigger="click"
          >
            <Button
              type="primary"
              className="bis-transparent-button"
              icon={<MenuOutlined />}
              title="Hide/Show Columns"
              onClick={(e) => this.onColumnHideClick(e)}
            />
          </Popover>
        </Col>
      </Row>
    );
  }
}

Grid.protoTypes = {
  columnDefs: PropTypes.array,
  rowData: PropTypes.array,
  defaultColDef: PropTypes.object,
  showToolBar: PropTypes.bool,
  onGridReady: PropTypes.func,
  gridApi: PropTypes.object,
  gridColumnApi: PropTypes.object,
  frameworkComponents: PropTypes.object,
  context: PropTypes.object,
  height: PropTypes.string,
};

Grid.defaultProps = {
  columnDefs: [],
  rowData: [],
  gridApi: {},
  gridColumnApi: {},
  frameworkComponents: {},
  context:{},
  showToolBar: false,
  height: "450px",
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
