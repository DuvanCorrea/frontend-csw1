import React from 'react';
import ImagenBanner from '../../images/ImagenBanner.jpg';
import '../../components/banner/Banner.css';

const Banner = () => {
    return (
        <>
            <div className = "Contenedor-banner">
                <img src = { ImagenBanner } alt = "Imagen Banner" className = "Imagen-Banner"/>
            </div>
        </>
    )
}

export default Banner;
