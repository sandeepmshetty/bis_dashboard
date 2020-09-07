import React, {Component} from 'react';
import {Button, Col, Row} from 'antd';
import {ClockCircleOutlined} from '@ant-design/icons';

import {SearchOutlined, ReloadOutlined, MailOutlined} from '@ant-design/icons';

import './ActionView.scss';

export default class ActionView extends Component {

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
						icon={<ClockCircleOutlined />}>
                        Time Clock
					</Button>
					<Button
						type="primary"
						className="bis-gray-button"
						title="Search"
						icon={<SearchOutlined />}/>
					<Button
						type="primary"
						className="bis-gray-button"
						title="Refresh"
						icon={<MailOutlined />}/>
					<Row className="pull-right">
						<a className="bis-anchor">Administrative Setting</a>
					</Row>
				</div>

			</div>
		);
	}
};
