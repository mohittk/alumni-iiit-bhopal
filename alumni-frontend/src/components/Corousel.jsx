import React from 'react';
const url1='https://img.freepik.com/premium-photo/close-up-plant-with-green-leaves_618582-2394.jpg';
const url2='https://images.hdqwalls.com/download/lamborghini-aventador-lp-750-sv-5k-m2-1360x768.jpg';
// const url3='https://wallpaperaccess.com/full/6566295.jpg';
const url3='https://img.freepik.com/premium-photo/asian-tropical-leaves-abstract-green-leaf-texture-nature-background_512343-1464.jpg';
const Corousel = () => {
    return (<>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{padding: '100px'}}>
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src={url1} alt="First slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={url2} alt="Second slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={url3} alt="Third slide"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </>)
}

export default Corousel;