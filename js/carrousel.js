window.addEventListener("load",function(){
    // Carrousel Banner
    new Glider(document.querySelector(".carousel__lista"),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        
    });
    //Carrousel Autos 
    new Glider(document.querySelector(".carousel__lista2"),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        
        arrows: {
            prev: '.carousel__anterior2',
            next: '.carousel__siguiente2'
        }, responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 700,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 990px
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
        
    });
    // Carrousel Noticias
    new Glider(document.querySelector(".carousel__lista3"),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicadores3',
        arrows: {
            prev: '.carousel__anterior3',
            next: '.carousel__siguiente3'
        },
        
    });
});

