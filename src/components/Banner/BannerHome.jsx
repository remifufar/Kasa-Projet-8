import React from 'react';
import Banner from './Banner';
import homeBanner from '../Assets/IMG.png'

const HomeBanner = () => {
    return(
        <Banner
            title='Chez vous, partout et ailleurs'
            src={homeBanner}
        />
    )
}

export default HomeBanner;