import React, { Component } from 'react'
import { Card, CardTitle, Col, Row } from 'react-materialize'
import Aboutus from '../Aboutus'

class Blogposts extends Component {
    render() {
        return (
            <div>

            <Aboutus/>
           
            <Row>
            <Col m="6">
            <Card header={<CardTitle reveal image={'http://lorempixel.com/output/nature-q-c-640-480-8.jpg'} waves='light' />}
                title="Card Title"
                reveal={
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hChMLUoQKy0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
                }>
                <p><a href="#">This is a link</a></p>
            </Card>
                </Col>
            <Col m="6">
            <Card header={<CardTitle reveal image={"http://lorempixel.com/output/nature-q-c-640-480-10.jpg"} waves='light' />}
                title="Card Title"
                reveal={
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/OyHqqyLsdoA?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                }>
                <p><a href="#">This is a link</a></p>
            </Card>
            </Col>
            <Col m="6">
            <Card header={<CardTitle reveal image={"http://lorempixel.com/output/nature-q-c-640-480-7.jpg"} waves='light' />}
                title="Card Title"
                reveal={
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KjuoLO8edVw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
                }>
                <p><a href="#">This is a link</a></p>
            </Card>
            </Col>
                

                </Row>
                </div>
        )
    }
}

export default Blogposts;