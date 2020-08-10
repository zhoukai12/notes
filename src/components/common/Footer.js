import React, { Component } from 'react'
import './Footer.scss'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="footer-div">
                <div>系统由 React+Node+Ant Desgin驱动 </div>
                <div>JSPang.com</div>
            </div>
        );
    }
}

export default Footer;