import React, { Component } from 'react'
import './Advert.scss'
class Advert extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="ad-div comm-box">
                <div><img src="http://blogimages.jspang.com/flutter_ad2.jpg" width="100%" /></div>
                <div><img src="http://blogimages.jspang.com/Vue_koa_ad1.jpg" width="100%" /></div>
                <div><img src="http://blogimages.jspang.com/WechatIMG12.jpeg" width="100%" /></div>
                <div><img src="https://jspang.com/images/ad_4.jpg" width="100%" /></div>
            </div>

        );
    }
}

export default Advert;