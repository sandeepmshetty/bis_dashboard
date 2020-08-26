import React from 'react';
import {Button, DatePicker} from 'antd';

export default function Application() {
    return (
        <div className="application">
            <h1>Header</h1>
            <DatePicker/>
            <Button type="primary" style={{
                marginLeft: 8
            }}>
                Primary Button
            </Button>

        </div>
    );
};