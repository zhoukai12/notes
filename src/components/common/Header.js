import React, { Component } from 'react'
import { Row, Col, Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import './Header.scss'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps, prevState)
        const { type } = nextProps;
        // 当传入的type发生变化的时候，更新state
        if (type !== prevState.type) {
            return {
                type,
            };
        }
        // 否则，对于state不进行任何操作
        return null;
    }
    _loadAsyncData = () => {
        this.$axios.apiGetTypeInfo().then(res => {
            console.log(res)
            this.setState({
                list: res && res.data.data || [],
            })
        })
    }
    componentDidMount() {
        this._loadAsyncData();
    }


    render() {
        let { list } = this.state;
        return (
            <div className='header'>
                <div className="head_center">
                    <Row type="flex" justify="center">
                        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                            <span className='header-logo'>周凯个人博客</span>
                            <span className='header-txt'>专注前端开发。</span>
                        </Col>
                        <Col xs={0} sm={0} md={14} lg={14} xl={14}>
                            <Row type="flex" justify="center" style={{marginTop: '5px'}}>
                                <Col span={3}>
                                    <NavLink exact to='/' className='nav' activeClassName="selected">
                                        首页
                                    </NavLink>
                                </Col>
                                <Col span={3}>
                                    <NavLink exact to='/2' className='nav' activeClassName="selected">
                                        分享
                                    </NavLink>
                                </Col>
                                <Col span={3}>
                                    <NavLink exact to='/1' className='nav' activeClassName="selected">
                                        嗷嗷
                                    </NavLink>
                                </Col>
                                {/* {
                                    list.map((item, index) => {
                                        return (
                                            <Col key={index} span={3}>
                                                <NavLink exact to={item.path} className='nav' activeClassName="selected">
                                                    {item.typeName}
                                                </NavLink>
                                            </Col>
                                        )
                                    })
                                } */}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Header;