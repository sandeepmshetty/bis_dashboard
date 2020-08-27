import React, { Component } from 'react';
import './Body.scss';
import ActionView from './ActionView/ActionView.jsx'; 
import DashboardTabView from './DashboardTabView/DashboardTabView.jsx';

export default class Body extends Component {
    render()
    {
        return (
            <div className="bis-body">
                <ActionView/>
                <DashboardTabView />
            </div>
        );
    }
};
