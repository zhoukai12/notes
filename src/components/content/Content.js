import React, { Component } from 'react'
import {Row,Col} from 'antd'
import Home from './Home'
import Author from './author/Author'
import Advert from './advert/Advert'
import {Switch,Route} from 'react-router-dom'
import './Content.scss'
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Row className="comm-main" type="flex" justify="center">
                <Col span={24}  >
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/1" component={Home} />
                    </Switch>
                </Col>
                {/* <Col xs={0} sm={0} md={{span: 6}} >
                    <Author/>
                    <Advert/>
                </Col> */}
            </Row>
        );
    }
}

export default Content;