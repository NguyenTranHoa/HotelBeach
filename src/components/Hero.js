import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
        <header className={this.props.hero}>{this.props.children} </header>
        );
    }
}

Hero.defaultProps = {
    hero: "defaultHero"
}

export default Hero;