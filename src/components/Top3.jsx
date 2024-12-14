import Title from "./Title.jsx";
import Cards from "./Cards.jsx";
import React, { Component } from "react";
import Slider from "react-slick";

export default function Top3() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px", // Ortadaki slide için padding
        slidesToShow: 3, // Ekranda 3 slide göster
        speed: 500, // Animasyon hızı
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Küçük ekranlar için 1 slide
                    centerPadding: "30px", // Mobil cihazlar için daha dar padding
                },
            },
        ],
    };

    return (
        <div>
            <Title>Top 3 Post</Title>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className="px-2">
                        <Cards
                            pp="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/ed/ed0261634ca29baa9c64c4ab473ec928b5c97495_full.jpg"
                            username="admin"
                            image="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww"
                            title="Title here... Lorem ipsum dolor sit amet, consectetur"
                            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, inventore, quos. Ab aut autem, cupiditate et, eveniet facere harum maiores natus nesciunt odit optio repellat rerum sint! Necessitatibus, sit, vitae."
                            date="12/02/2024"
                        />
                    </div>
                    <div className="px-2">
                        <Cards
                            pp="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/ed/ed0261634ca29baa9c64c4ab473ec928b5c97495_full.jpg"
                            username="admin"
                            image="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww"
                            title="Title here... Lorem ipsum dolor sit amet, consectetur"
                            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, inventore, quos. Ab aut autem, cupiditate et, eveniet facere harum maiores natus nesciunt odit optio repellat rerum sint! Necessitatibus, sit, vitae."
                            date="12/02/2024"
                        />
                    </div>
                    <div className="px-2">
                        <Cards
                            pp="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/ed/ed0261634ca29baa9c64c4ab473ec928b5c97495_full.jpg"
                            username="admin"
                            image="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww"
                            title="Title here... Lorem ipsum dolor sit amet, consectetur"
                            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, inventore, quos. Ab aut autem, cupiditate et, eveniet facere harum maiores natus nesciunt odit optio repellat rerum sint! Necessitatibus, sit, vitae."
                            date="12/02/2024"
                        />
                    </div>
                    <div className="px-2">
                        <Cards
                            pp="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/ed/ed0261634ca29baa9c64c4ab473ec928b5c97495_full.jpg"
                            username="admin"
                            image="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww"
                            title="Title here... Lorem ipsum dolor sit amet, consectetur"
                            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, inventore, quos. Ab aut autem, cupiditate et, eveniet facere harum maiores natus nesciunt odit optio repellat rerum sint! Necessitatibus, sit, vitae."
                            date="12/02/2024"
                        />
                    </div>
                    <div className="px-2">
                        <Cards
                            pp="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/ed/ed0261634ca29baa9c64c4ab473ec928b5c97495_full.jpg"
                            username="admin"
                            image="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww"
                            title="Title here... Lorem ipsum dolor sit amet, consectetur"
                            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, inventore, quos. Ab aut autem, cupiditate et, eveniet facere harum maiores natus nesciunt odit optio repellat rerum sint! Necessitatibus, sit, vitae."
                            date="12/02/2024"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    )
}
