$(document).ready(function(){
    
    var imgs = $('li.pbSlider'),
        totalImages = imgs.length,
    
        delay = 7500,
        slideNo = 0,
        firstImage = imgs.eq(0).find('img');
        firstImage.load(function(){
            var imgHeight = imgs.eq(slideNo).find('img').height();
        $('.pbSliderContainer').css('height', imgHeight +'px');         
        });
          

    setInterval(changeSlide, delay);

    $(window).resize(function(){
        imgHeight = imgs.eq(slideNo).height();    
    $('.pbSliderContainer').css('height', imgHeight +'px');
    });
    
    function changeSlide(){

    

        
        imgs.eq(slideNo).slideUp(2500);       
        
        
        slideNo++;
        if(slideNo === totalImages){
            slideNo = 0;
        }
        imgs.eq(slideNo).fadeIn(3500);
        
    }
});