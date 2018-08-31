import React, {Component} from 'react'
import {Slide, Slider} from 'react-materialize'
import Blogposts from "./Blogposts/Blogposts"


class Body extends Component{
    render(){
        return(
            <div>
            <Slider>
                <Slide
                    className="black-text"
                    src="./images/Slider/drone.jpg"
                    title="Travel">
                    Follow us through our journies around the world.
                </Slide>
                <Slide
                    
                    className="black-text"
                    src="./images/Slider/wedding.jpg"
                    title="Wedding"
                    placement="left">
                    Relive our day with us
                </Slide>
                <Slide
                    src="./images/Slider/mirmir.jpg"
                    title="Third Item"
                    placement="left">
                    To be Filled with items.
                </Slide>
                <Slide
                    src="http://lorempixel.com/580/250/nature/3"
                    title="This is another title">
                    Welcome to our website.
                </Slide>
            </Slider>

            <Blogposts/>
            
            </div>
        )
    }
}

export default Body;