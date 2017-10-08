import React from 'react'
import NewLogo from '../../images/news_logo.svg'
import {Button, Col, Form, Icon, Input, Menu, message, Modal, Row, Tabs} from 'antd';
import './Header.css'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            current: 'mail',
            modalVisible: false
        };
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    showModal = () => {
        this.setState({
            modalVisible: true,
        });
    };

    handleOk = (e) => {
        console.log(e);
        this.setState({
            modalVisible: false,
        });
    };

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            modalVisible: false,
        });
    };

    tabCallback = (key) => {
        console.log(key);
    };
    handleSubmit = (e) => {
        e.preventDefault();


        console.log(this.props.form.getFieldsValue());

        message.success('登录成功');
        this.setState({modalVisible: false,});
    };


    render() {

        const {getFieldDecorator} = this.props.form;

        return (
            <div>
                <Row className="news-row">
                    <Col span={2}/>
                    <Col span={4}>
                        <a href="/" className="news-logo">
                            <img src={NewLogo}/>
                            <span>React News</span>
                        </a>
                    </Col>
                    <Col span={15} className="menu">
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal">
                            <Menu.Item key="mail">
                                <Icon type="mail"/>导航栏1
                            </Menu.Item>
                            <Menu.Item key="app">
                                <Icon type="appstore"/>导航栏2
                            </Menu.Item>
                            <Menu.Item key="app1">
                                <Icon type="appstore"/>导航栏3
                            </Menu.Item>
                            <Menu.Item key="app2">
                                <Icon type="appstore"/>导航栏4
                            </Menu.Item>
                            <Menu.Item key="app3">
                                <Icon type="appstore"/>导航栏5
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={3}>
                        <Button type="primary" onClick={this.showModal}>登录/注册</Button>
                    </Col>
                </Row>


                <Modal
                    title="登录/注册"
                    visible={this.state.modalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <Tabs defaultActiveKey="1" onChange={this.tabCallback}>
                        <TabPane tab="登录" key="1">
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <FormItem>
                                    {getFieldDecorator('userName', {
                                        rules: [{required: true, message: 'Please input your username!'}],
                                    })(
                                        <Input prefix={<Icon type="user" style={{fontSize: 13}}/>}
                                               placeholder="用户名"/>
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password', {
                                        rules: [{required: true, message: 'Please input your Password!'}],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                               placeholder="密码"/>
                                    )}
                                </FormItem>
                                <FormItem>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                </FormItem>
                            </Form></TabPane>
                        <TabPane tab="注册" key="2">Content of Tab Pane 2</TabPane>
                    </Tabs>
                </Modal>
            </div>
        );
    }
}

export default Header = Form.create({})(Header);