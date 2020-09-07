import React, {Component} from 'react';
import {Button, Row, Modal} from 'antd';
import {ClockCircleOutlined} from '@ant-design/icons';
import {SearchOutlined, ReloadOutlined, MailOutlined} from '@ant-design/icons';
import AdministrativeSettingView from '../../Body/ActionView/AdministrativeSettingView/AdministrativeSettingView.jsx';
import './ActionView.scss';

export default class ActionView extends Component {

				constructor(props) {
								super(props);
								this.state = {
												visible: false
								}
				}

				showModal() {
								this.setState({visible: true});
				}

				handleOk(e) {
								this.setState({visible: false});
				};

				handleCancel(e) {
								this.setState({visible: false});
				};

				onClick() {
								window.open('http://localhost:3000/JobInProgressTabPane', '_blank');
				}

				render()
				{
								return (
												<div className="bis-action-view">
																<div className="bis-button-group">
																				<Button type="primary" className="bis-red-button" onClick={this.onClick}>Create Job</Button>
																				<Button
																								type="primary"
																								className="bis-gray-button"
																								icon={< ClockCircleOutlined />}>
																								Time Clock
																				</Button>
																				<Button
																								type="primary"
																								className="bis-gray-button"
																								title="Search"
																								icon={< SearchOutlined />}/>
																				<Button
																								type="primary"
																								className="bis-gray-button"
																								title="Refresh"
																								icon={< MailOutlined />}/>
																				<Row className="pull-right">
																								<a
																												className="bis-anchor"
																												onClick={this
																												.showModal
																												.bind(this)}>Administrative Settings</a>
																				</Row>
																</div>
																<Modal			width= {900}
																				title="Administrative Settings"
																				visible={this.state.visible}
																				onOk={this.handleOk.bind(this)}
																				onCancel={this.handleCancel.bind(this)}>
																	<AdministrativeSettingView />
																</Modal>
												</div>)
												

				}
};
