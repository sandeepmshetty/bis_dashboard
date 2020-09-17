import React, {Component} from "react";
import {
  Row,
  Col,
  Input,
  InputNumber,
  Button,
  Select,
  DatePicker,
  Form
} from "antd";
import {SaveOutlined, PlusOutlined, MinusCircleOutlined} from "@ant-design/icons";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 4
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 20
    }
  }
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      offset: 0
    },
    sm: {
      offset: 0
    }
  }
};

const onFinish = values => {
  console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

export default class TimeClockView extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    const {Option} = Select;

    return (
      <div>
        <Row className="bis-dashboard-search-row">
          <Col span={4}>
            <h3>
              <b>Record Time</b>
            </h3>
          </Col>
        </Row>

        <Row className="bis-dashboard-search-row bis-row">
          <Col span={2} className="bis-col">
            <span>Name</span>
          </Col>
          <Col span={6} className="bis-col">
            <Select onChange={this
              .handleChange
              .bind(this)}>
              <Option value="sanjaybarman">Sanjay Barman</Option>
              <Option value="sandeepshetty">Sandeep Shetty</Option>
            </Select>
          </Col>
          <Col span={4} className="bis-col">
            <span>Status:</span>
          </Col>
          <Col span={3} className="bis-col">
            <span>Logged In</span>
          </Col>
        </Row>

        <Row className="bis-dashboard-search-row bis-row">
          <Col span={2} className="bis-col">
            <span>Function</span>
          </Col>
          <Col span={6} className="bis-col">
            <Select
              placeholder="Operator"
              onChange={this
              .handleChange
              .bind(this)}>
              <Option value="sanjaybarman">Sanjay Barman</Option>
              <Option value="sandeepshetty">Sandeep Shetty</Option>
            </Select>
          </Col>
          <Col span={4} className="bis-col">
            <span>Available Hours</span>
          </Col>
          <Col span={3} className="bis-col">
            <InputNumber min={0} max={10} step={0.1}/>
          </Col>
          <Col className="bis-col">
            <Button
              type="primary"
              className="bis-gray-button"
              title="Save"
              icon={< SaveOutlined />}/>
          </Col>
        </Row>

        <Row className="bis-dashboard-search-row bis-row bis-align-center">
          <Col span={24}>
            <Button type="primary" className="bis-gray-button">
              Start Day
            </Button>
          </Col>
        </Row>

        <Row className="bis-dashboard-search-row">
          <Col span={4}>
            <h3>
              History
            </h3>
          </Col>
        </Row>

        <Row className="bis-dashboard-search-row bis-row">
          <Col span={4} className="bis-col">
            <span>Start Day:</span>
          </Col>
          <Col span={4} className="bis-col">
            <span>Stop Day:</span>
          </Col>
        </Row>

        <Form
          name="dynamic_form_item"
          {...formItemLayoutWithOutLabel}
          onFinish={onFinish}>
          <Form.List name="names">
            {(fields, {add, remove}) => {
              return (
                <div>
                  {fields.map((field, index) => (
                    <Form.Item
                      {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                      required={false}
                      key={field.key}>
                      <div>
                        <Form.Item
                          {...field}
                          validateTrigger={['onChange', 'onBlur']}
                          rules={[{
                            required: true,
                            whitespace: true,
                            message: "Please input start date"
                          }
                        ]}
                          noStyle>
                          <div className="bis-button-group">
                            <DatePicker onChange={this.onChange} placeholder="Start Date"/>

                            <DatePicker onChange={this.onChange} placeholder="End Date"/>

                            <MinusCircleOutlined
                              className="dynamic-delete-button"
                              style={{
                              margin: '0 8px'
                            }}
                              onClick={() => {
                              remove(field.name);
                            }}/>
                          </div>
                        </Form.Item>

                      </div>
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                      add();
                    }}
                      style={{
                      width: '37.5%'
                    }}>
                      <PlusOutlined/>
                      Add a day
                    </Button>
                  </Form.Item>
                </div>
              );
            }}
          </Form.List>
        </Form>

      </div>
    );
  }
}
