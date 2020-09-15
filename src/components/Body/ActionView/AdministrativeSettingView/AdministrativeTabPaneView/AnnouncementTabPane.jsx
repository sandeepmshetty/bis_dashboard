import React, { Component, useState  } from "react";
import { Row, Col, Select, Button, Dropdown, IconButton } from "antd";
import RichTextEditor from "react-rte";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Quill = ReactQuill.Quill
var Font = Quill.import('formats/font');
Font.whitelist = ['Ubuntu', 'Raleway', 'Roboto'];
Quill.register(Font, true); 

export default class AnnouncementTabPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: RichTextEditor.createEmptyValue(),
    };
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    const { Option } = Select;

    const modules = {
        toolbar: [
            // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
          
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
        
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          
            ['clean']                                         // remove formatting button
        ]
      };
      
      const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
      ]

    return (
      <div>
        <Row className="bis-dashboard-search-row">
          <Col span={12}>
            <h3>Announcement Status: On</h3>
          </Col>
        </Row>

        <ReactQuill theme="snow" modules={modules}/>

        {/* <RichTextEditor
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          customControls={[
            (setValue, getValue, editorState) => {
              let choices = [{ label: "1" }, { label: "2" }, { label: "3" }];
              return (
                <Select placeholder="Operator">
                  {choices.map((item) => (
                    <Option key={item.label}>{item.label}</Option>
                  ))}
                </Select>
              );
            },
          ]}
        /> */}

        <div className="bis-button-div">
          <div className="bis-button-group">
            <Button type="primary" className="bis-gray-button">
              Enable
            </Button>
            <Button type="primary" className="bis-gray-button">
              Disable
            </Button>
            <Button type="primary" className="pull-right bis-gray-button">
              Clear Text
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
