import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import apiBanner from './api-banner';

const Banner = () => {

    const [listaDeBanners, setListaDeBanners] = useState([]);

    useEffect(()=>{
        const carregarBanners = async () => {
            //Carregando os banners da tela principal
            let lista = await apiBanner.getProdutos();
            setListaDeBanners(lista);
        }

        carregarBanners();
    }, []);

    
    const settings = {
        useCSS: true,
        useTransform: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnDotsHover: true,
        pauseOnHover: false,
        dots: true,
        arrows: true,
        speed: 500,
        draggable: false,
        touchMove: false,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              arrows: false,
              draggable: true,
              touchMove: true,
            }
          },
        ]
      };

    return (
    <div className="banner" id="banner">

        <Slider {...settings}>

        {listaDeBanners.map((item, key)=>(
            <div key={key} className="banner__slide">
                <div className="banner__bg">
                    <div className="banner__spacer"></div>
                    <div className="banner__img" style={{backgroundImage: `url(${item.imagem})`}}>
                    </div>
                </div>
                <div className="container banner__container">
                    <h3 className="banner__heading">
                        {item.titulo}
                    </h3>
                </div>
            </div>
        ))}

        </Slider>
        
    </div>
    );
}

export default Banner;