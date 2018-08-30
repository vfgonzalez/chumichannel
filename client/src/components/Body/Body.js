import React, {Component} from 'react'
import {Slide, Slider} from 'react-materialize'
import Blogposts from "./Blogposts/Blogposts"


class Body extends Component{
    render(){
        return(
            <div>
            <Slider>
                <Slide
                    src="http://lorempixel.com/580/250/nature/1"
                    title="This is our big Tagline!">
                    Here's our small slogan.
                </Slide>
                <Slide
                    src="http://lorempixel.com/580/250/nature/2"
                    title="Left aligned Caption"
                    placement="left">
                    Here's our small slogan.
                </Slide>
                <Slide
                    src="http://lorempixel.com/580/250/nature/3"
                    title="Right aligned Caption"
                    placement="right">
                    Here's our small slogan.
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