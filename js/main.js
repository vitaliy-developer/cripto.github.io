$(document).ready(function(){
    $('.contacts' ).click( function(){ 
        var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
        return false; 
    });
});
$(document).ready(function(){
    $('.bitkointalk' ).click( function(){ 
        var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
        return false;
    });
});
$(document).ready(function(){
    $('.reviews' ).click( function(){ 
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false; 
    });
});
$(document).ready(function(){
    $('.services' ).click( function(){ 
        var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
        return false; 
    });
});

