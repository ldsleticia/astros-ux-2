

// nav change the color by move the scroll

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }else{
        $('nav').removeClass('black');
    }
})

// carousel
    
    
    let imgs = document.querySelectorAll('.imgJs');
    let imgTxt = document.querySelectorAll('.imgTxt');
    let slider = 0;

    function avancarSlide(){
    imgs[slider].style.display = 'none';
    imgTxt[slider].style.display = 'none';
    console.log(imgTxt[slider]);

    slider++;

    if(slider >= imgs.length){
        slider = 0;
    }

    imgs[slider].style.display = 'block';
    imgTxt[slider].style.display = 'block';
    
    }

    

    setInterval(avancarSlide, 5000);

