import React, { Component } from 'react';
import { Avatar, Divider ,Tooltip} from 'antd'
import {
    GithubOutlined,
    WechatOutlined,
    QqOutlined
} from '@ant-design/icons';
import './Author.scss'
class Author extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="card">
                <h2>周凯的名片</h2>
                <p>职业：程序员，Web前端开发</p>
                <p>现居：陕西省-西安市</p>
                <p>公司：上海莫凡-陕西优卖</p>
                <p>Email：1067996923@qq.com</p>
                <Divider orientation="left" style={{ marginTop: '0px', marginBottom: '10px', color: '#89919a' }}>社交账号</Divider>
                <div className="accountBox">
                    <Tooltip title='zhoukai12'><Avatar size={28} icon={<GithubOutlined />} className="account" /></Tooltip>
                    <Tooltip title='qq1067996923'><Avatar size={28} icon={<WechatOutlined />} className="account" /></Tooltip>
                    <Tooltip title='1067996923'><Avatar size={28} icon={<QqOutlined />} className="account" /></Tooltip>
                </div>
            </div>
        );
    }
}

export default Author;