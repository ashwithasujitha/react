import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ heroName }) => {

    if (heroName === 'Joker') {
        throw new Error('Not a hero');
    }

    return (
        <div>
            {heroName}
        </div>
    )
}

Hero.propTypes = {
    heroName: PropTypes.string.isRequired
}

export default Hero;
