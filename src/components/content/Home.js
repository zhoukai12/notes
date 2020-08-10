import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Author from './author/Author'
import Advert from './advert/Advert'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import './Home.scss'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.swiperInit();
    }
    swiperInit = () => {
        this.mySwiper = new Swiper('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }
    componentWillUnmount() {
        this.mySwiper.destroy()
    }
    render() {
        return (
            <div className='home'>
                <Row type="flex" justify="center">
                    <Col span={12}>
                        <div className="swiperBox">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src={require('assets/images/swiper1.jpeg')} alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={require('assets/images/swiper2.jpeg')} alt="" />
                                    </div>
                                </div>
                                {/* 分页器 */}
                                <div className="swiper-pagination"></div>
                                {/* 切换按钮 */}
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="centerBox">

                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="rightBox">
                            <Author />
                            <Advert />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;