import React, {Component} from 'react';
import {Button} from 'antd';
import {ClockCircleOutlined} from '@ant-design/icons'

import './ActionView.scss';

export default class ActionView extends Component {
    render()
    {
        return (
            <div className="bis-action-view">
                <div className="bis-button-group">
                    <Button type="primary" className="bis-red-button">Create Job</Button>
                    <Button
                        type="primary"
                        className="bis-gray-button"
                        icon={< ClockCircleOutlined />}>
                        Time Clock
                    </Button>
                </div>
            </div>
        );
    }
};
