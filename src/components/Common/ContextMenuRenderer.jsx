import React, {Component} from 'react';
import PropTypes from "prop-types";
import {List, Popover, Divider} from "antd";
import {DownOutlined} from "@ant-design/icons";
import "./ContextMenuRendered.scss";

export default class ContextMenuRenderer extends Component {
  constructor(props) {
    super(props);

    this.invokeParentMethod = this
      .invokeParentMethod
      .bind(this);
  }

  invokeParentMethod(e) {
    this
      .props
      .context
      .componentParent
      .methodFromParent(`Row: ${this.props.node.rowIndex}`, e);
  }

  getMenuList() {
    const menuList = [
      "Set Onshore",
      "Set Priority",
      "Duplicate Job",
      "Send Email",
      "Cancel Job",
      "Save Grid Layout",
      "Default Grid Layout"
    ]
    return (
      <div>
        {menuList.map((menu) => (
          <li key={menu} className="bis-popover-list"  onClick={(e) => this.invokeParentMethod(e)}>
            {menu}
          </li>
        ))}
      </div>
    );
  }

  render() {
    const menuList = this.getMenuList();
    return (
      <span>
        <Popover className="bis-context-popover"
          placement="bottomLeft"
          title={"Select action"}
          content={menuList}
          trigger="click">
          <DownOutlined/>
        </Popover>
      </span>
    );
  }
}

ContextMenuRenderer.defaultProps = {
  context: {
    componentParent: this
  },
  node: {},
  colDef: {},
  frameworkComponents: {}
}

ContextMenuRenderer.propTypes = {
  context: PropTypes.object,
  node: PropTypes.object,
  colDef: PropTypes.object,
  frameworkComponents: PropTypes.object
};
