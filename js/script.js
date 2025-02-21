(function($){
    $(function(){
    /*----------kostra------*/
        
     /*----toggly--*/   
    $(".jq--mobile-icon-for-jq").click(function(){
        
        $(".nav-back").fadeToggle(100);
        $("nav ul").slideToggle(2000);
        $(".mobile-nav").fadeToggle(2000);
    });    
        
        
        /*---změna icon hamburgeru---*/
        
        $(".jq--hamburger").click(function(){
            
            if($(".jq--hamburger").attr("src") == "images/ikony/hamburger.png")
                {
                    $($(".jq--hamburger").attr("src", "images/ikony/crossnew.png"));
                }
            
            else
                
                {
                    $($(".jq--hamburger").attr("src", "images/ikony/hamburger.png"));
                }
            
            
            
            
        });
        
        
        $(window).resize(function(){
            if ($(window).width() > 600) {
                $("nav ul").removeAttr("style"); 
                $(".nobile-nav-background").removeAttr("style");
            }
        });
        
        
        
        $(".jq--sc-gallery").click(function(){
            
            $("html, body").animate({
                scrollTop: $(".jq--gallery").offset().top
            }, 2000);
            
        });

        
        
        
        
        
        
        
        
        
        
        
        
        
        
    /*---konec-kostry---*/    
    });
})(jQuery);