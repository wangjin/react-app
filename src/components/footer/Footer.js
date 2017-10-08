import React from 'react'
import './Footer.css'
import {Col, Row} from 'antd';

export default class Footer extends React.Component {

    render() {
        return (
            <div>
                <Row className="footer">
                    <Col span={2}/>
                    <Col span={20}>
                        &copy;&nbsp;WangJin. All Rights Reserved.
                    </Col>
                    <Col span={2}/>
                </Row>
            </div>
        );
    }
}