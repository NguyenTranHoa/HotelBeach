import React, { Component } from 'react';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeatureRooms from '../components/FeaturedRooms';

class Home extends Component {
    render() {
        return (
            <>
            <Hero>
                <h1>Hello</h1>
                 <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner> 
            </Hero>
            <Services />
            <FeatureRooms/>
            </>
        );
    }
}

export default Home;