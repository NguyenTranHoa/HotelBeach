import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state= {
            services: [
                {
                    icon:<FaCocktail/>,
                    title: "free cocktails",
                    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, temporibus."
                },
                {
                    icon:<FaHiking/>,
                    title: "free hiking",
                    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, temporibus."
                },
                {
                    icon:<FaShuttleVan/>,
                    title: "free shuttle",
                    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, temporibus."
                },
                {
                    icon:<FaBeer/>,
                    title: "free beer",
                    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, temporibus."
                }
            ]
        }
    }
    

    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="services">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}

export default Services;