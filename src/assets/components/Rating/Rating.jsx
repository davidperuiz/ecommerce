import React from 'react';

const Rating = ({ rate }) => {
    const intRate = Math.floor(rate);
    const isHalfRate = rate % 1 >= 0.5 ? true : false;
    const iconRate = [];

    for(let i = 0; i < intRate; i++) {
        iconRate.push(<i className="fa-solid fa-star" key={i}></i>);
    }

    isHalfRate ? iconRate.push(<i className="fa-solid fa-star-half-stroke" key={iconRate.length}></i>) : "";

    while(iconRate.length < 5) {
        iconRate.push(<i className="fa-regular fa-star" key={iconRate.length}></i>);
    }

    return (
        <>
            {iconRate}
        </>
    );
}

export default Rating;
