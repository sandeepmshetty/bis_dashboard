import React, {Component} from 'react';
import {Button} from 'antd';
import {ClockCircleOutlined} from '@ant-design/icons'
import history from '../../../routes/history.js';

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
                    <Button
                        type="primary"
                        className="bis-red-button"
                        onClick={this.onClick}>Create Job</Button>
                    <Button
                        type="primary"
                        className="bis-gray-button"
                        icon={< ClockCircleOutlined />}>
                        Time Clock
                    </Button>
                </div>

                <div className="bis-button-group pull-right">
                    
                </div>
            </div>
        );
    }
};
