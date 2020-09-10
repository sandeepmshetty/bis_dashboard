import React, {Component} from "react";
import {Row, Col, Select, Button} from "antd";
import RichTextEditor from 'react-rte';

export default class AnnouncementTabPane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: RichTextEditor.createEmptyValue()
        }
    }

    onChange(value) {
        this.setState({value});
    }

    render() {
        const {Option} = Select;

        return (
            <div>
                <Row className="bis-dashboard-search-row">
                    <Col span={12}>
                        <h3>
                            Announcement Status: On</h3>
                    </Col>
                </Row>

                <RichTextEditor
                    value={this.state.value}
                    onChange={this
                    .onChange
                    .bind(this)}/>

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
