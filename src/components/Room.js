import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import propTypes from 'prop-types'

export default class Room extends Component {
    
    render() {
        const {name, slug, images, price} = this.props.room;
       // console.log(this.props.room)
        return (
            <article className="room">
                <div className="img-container">
                    <img src={images[0] || defaultImg} alt="single-room"></img>
                    <div className="price-top">
                        <h6>${price}</h6>
                        <p>per night</p>
                    </div>
                    <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                        Features
                    </Link>
                </div>    
                <p className="room-info">{name}</p>            
            </article>
        )
    }
}

Room.propTypes = {
    room: propTypes.shape({
        name: propTypes.string.isRequired,
        slug: propTypes.string.isRequired,
       // images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: propTypes.number.isRequired
    })
};