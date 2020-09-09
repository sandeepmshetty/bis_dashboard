import React, {Component} from 'react';
import {
    Input,
    Row,
    Col,
    DatePicker,
    Button,
    Collapse,
    Form, 
    Checkbox,
    Divider,
    Space,
    Radio, 
} from 'antd';
import {AgGridReact} from 'ag-grid-react';
import {SearchOutlined, ReloadOutlined} from '@ant-design/icons';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { Panel } = Collapse;


const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
};

const { TextArea } = Input;

const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
};

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };

const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
};

const onFinish = values => {
    console.log('Success:', values);
  };

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};
  

export default class CreateJobView extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
        }
    }

    onChange(date, dateString) {
        console.log(date, dateString);
    }

    render()
    {
        return <div>
            <Row className="bis-dashboard-search-row">
            </Row>
            <Collapse onChange={callback}>
                <Panel header="Your Details" key="1">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        >
                        <Form.Item
                            label="Requester"
                            name="requester"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="unchecked">
                            <Checkbox>I am raising this request on behalf of someone else</Checkbox>
                        </Form.Item>

                        <Form.Item
                            label="Cost Center"
                            name="costcenter"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Region"
                            name="region"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Group Name"
                            name="groupName"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Request Sector" name="remember" valuePropName="unchecked">
                            <Checkbox>Consumer/Retail</Checkbox>
                            <Checkbox>FIG</Checkbox>
                            <Checkbox>Healthcare</Checkbox>
                            <Checkbox>Industries</Checkbox>
                            <Checkbox>Nat Res</Checkbox>
                            <Checkbox>Others</Checkbox>
                            <Checkbox>TMT</Checkbox>
                        </Form.Item>

                        <Form.Item
                            label="Work Phone"
                            name="groupName"
                            rules={[
                            {
                                required: false,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Alternative Phone"
                            name="groupName"
                            rules={[
                            {
                                required: false,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="groupName"
                            rules={[
                                {
                                  type: 'email',
                                  message: 'The input is not valid E-mail!',
                                },
                                {
                                  required: true,
                                  message: 'Please input your E-mail!',
                                },
                              ]}
                        >
                            <Input />
                        </Form.Item>
                    </Form>    
                </Panel>
                <Panel header="Company Request" key="2">
                    <Divider orientation="left">Step 1: Add Company</Divider>
                    <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
                        <Form.List name="names">
                            {(fields, { add, remove }) => {
                            return (
                                <div>
                                {fields.map((field, index) => (
                                    <Form.Item
                                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                    label={index === 0 ? 'Passengers' : ''}
                                    required={false}
                                    key={field.key}
                                    >
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: "Please input passenger's name or delete this field.",
                                        },
                                        ]}
                                        noStyle
                                    >
                                        <Input placeholder="passenger name" style={{ width: '60%' }} />
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                        className="dynamic-delete-button"
                                        style={{ margin: '0 8px' }}
                                        onClick={() => {
                                            remove(field.name);
                                        }}
                                        />
                                    ) : null}
                                    </Form.Item>
                                ))}
                                <Form.Item>
                                    <Button
                                    type="dashed" 
                                    onClick={() => {
                                        add();
                                    }}
                                    style={{ width: '60%' }}
                                    >
                                    <PlusOutlined /> Add Company (Add full company name)
                                    </Button>
                                    {/* <Button
                                    type="dashed"
                                    onClick={() => {
                                        add('The head item', 0);
                                    }}
                                    style={{ width: '60%', marginTop: '20px' }}
                                    >
                                    <PlusOutlined /> Add field at head
                                    </Button> */}
                                </Form.Item>
                                </div>
                            );
                            }}
                        </Form.List>

                        {/* <Form.Item>
                            <Button type="primary" htmlType="submit">
                            Submit
                            </Button>
                        </Form.Item> */}
                        </Form>

                    <Divider orientation="left">Step 2: Select Job Type</Divider>
                    <Form.Item name="radio-group" label="Job Type">
                        <Radio.Group>
                            <Radio value="a">PIB (add 4+ elements below)</Radio>
                            <Radio value="b">Company Profile (add 4+ elements below) </Radio>
                            <Radio value="c">Other (e.g. news run, prospectus, equity research)</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name="radio-group" label="Output Format">
                        <Radio.Group>
                            <Radio value="a">Individuals Files</Radio>
                            <Radio value="b">PDF</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Divider orientation="left">Step 3: Add Elements</Divider>
                    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                        <Form.List name="users">
                            {(fields, { add, remove }) => {
                            return (
                                <div>
                                <Form.Item>
                                    <Button
                                    type="dashed"
                                    onClick={() => {
                                        add();
                                    }}
                                    block
                                    >
                                    <PlusOutlined /> Add field
                                    </Button>
                                </Form.Item>
                                {fields.map(field => (
                                    <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">
                                    <Form.Item
                                        {...field}
                                        name={[field.name, 'first']}
                                        fieldKey={[field.fieldKey, 'first']}
                                        rules={[{ required: true, message: 'Missing first name' }]}
                                    >
                                        <Input placeholder="First Name" />
                                    </Form.Item>
                                    <Form.Item
                                        {...field}
                                        name={[field.name, 'last']}
                                        fieldKey={[field.fieldKey, 'last']}
                                        rules={[{ required: true, message: 'Missing last name' }]}
                                    >
                                        <Input placeholder="Last Name" />
                                    </Form.Item>

                                    <MinusCircleOutlined
                                        onClick={() => {
                                        remove(field.name);
                                        }}
                                    />
                                    </Space>
                                ))}

                                </div>
                            );
                            }}
                        </Form.List>
                    </Form>
                    <Divider orientation="left">Step 4: Instructions</Divider>
                    In neccessary, please describe your request in more detail below
                    <TextArea rows={4} />
                </Panel>
                <Panel header="Marketing/Industry Request" key="3">
                <Divider orientation="left">Market/Industry</Divider>
                    <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
                        <Form.List name="names">
                            {(fields, { add, remove }) => {
                            return (
                                <div>
                                {fields.map((field, index) => (
                                    <Form.Item
                                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                    label={index === 0 ? 'Passengers' : ''}
                                    required={false}
                                    key={field.key}
                                    >
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: "Please input passenger's name or delete this field.",
                                        },
                                        ]}
                                        noStyle
                                    >
                                        <Input placeholder="passenger name" style={{ width: '60%' }} />
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                        className="dynamic-delete-button"
                                        style={{ margin: '0 8px' }}
                                        onClick={() => {
                                            remove(field.name);
                                        }}
                                        />
                                    ) : null}
                                    </Form.Item>
                                ))}
                                <Form.Item>
                                    <Button
                                    type="dashed" 
                                    onClick={() => {
                                        add();
                                    }}
                                    style={{ width: '60%' }}
                                    >
                                    <PlusOutlined /> Add Market/Industry
                                    </Button>
                                    {/* <Button
                                    type="dashed"
                                    onClick={() => {
                                        add('The head item', 0);
                                    }}
                                    style={{ width: '60%', marginTop: '20px' }}
                                    >
                                    <PlusOutlined /> Add field at head
                                    </Button> */}
                                </Form.Item>
                                </div>
                            );
                            }}
                        </Form.List>

                        {/* <Form.Item>
                            <Button type="primary" htmlType="submit">
                            Submit
                            </Button>
                        </Form.Item> */}
                        </Form>
   
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        >
                        <Form.Item
                            label="Market/Industry"
                            name="requester"
                            rules={[
                            {
                                required: false,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Geography (Specify country or region required)"
                            name="requester"
                            rules={[
                            {
                                required: false,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                    </Form>
                    <Divider orientation="left">Other Details</Divider>
                    In neccessary, please describe your request in more detail below. Please include examples 
                    of companies in this market and timeframes needed (historical or forecast data)
                    <TextArea rows={4} />
                </Panel>
                <Panel header="M&A/Capital Market Request" key="4">
                    <Form
                            {...layout}
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            >
                        <Form.Item label="Research Types" name="remember" valuePropName="unchecked">
                            <Checkbox>M&A</Checkbox>
                            <Checkbox>DCM</Checkbox>
                            <Checkbox>ECM</Checkbox>
                            <Checkbox>Loans</Checkbox>
                            <Checkbox>Project Finance</Checkbox>
                            <Checkbox>Fees</Checkbox>
                        </Form.Item>
                    </Form>
                    <Divider orientation="left">Instructions</Divider>
                    NOTE: If this is an update, please upload earlier version.
                    Describe your request more in details below. Please include output required (e.g. volumes.....)
                    <TextArea rows={4} />
                </Panel>
                <Panel header="Other Request" key="5">
                <Divider orientation="left">Instructions</Divider>
                    NOTE: If this is an update, please upload earlier version.
                    Describe your request more in details below. Please include output required (e.g. volumes.....)
                    <TextArea rows={4} />
                </Panel>
                <Panel header="Deadline" key="6">
                <p>{text}</p>
                </Panel>
            </Collapse>
            
        </div>
    }
}