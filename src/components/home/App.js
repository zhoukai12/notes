import React, { Component } from 'react';
import { ConfigProvider } from 'antd';
import { Route } from 'react-router-dom'
import 'antd/dist/antd.css';
import Header from 'components/common/Header'
import Footer from 'components/common/Footer'
import Content from 'components/content/Content'
import zhCN from 'antd/es/locale/zh_CN';
import './App.scss'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }
    componentDidMount() {
        // this.$axios.apiGetHomeData().then(res=>{
        //     console.log(res)
        // })
    }

    render() {
        return (
            <ConfigProvider locale={zhCN} csp={{ nonce: 'YourNonceCode' }}>
                <Header />
                <Content />
                <Footer />
            </ConfigProvider>
        );
    }
}

export default App;