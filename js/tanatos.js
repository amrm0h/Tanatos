/* global $, console, alert, window */


$(function () {
    "use strict";
    
    // trigger nice scroll for all page 
    
    $("body").niceScroll({
        cursorcolor: "#f7600f",
        cursorwidth: "8px",
        cursorborder: "none"
    });
    
    
    // assign header width and height to window's 
    
    $("div.header").height($(window).height());
    
    // click on down arrow on header 
    
    $("div.header i.fa-chevron-down").on("click", function () {
        
        $("html, body").animate({
            scrollTop: $("div#messions").offset().top
        }, 800);
    });
    
    
    // show more button in works 
    
    
    $("div.works .images button.show").click(function () {
        
        var hiddenWork = $("div.works .images .work.hidden");
        
        $(this).toggleClass("shown");
        
        if ($(this).hasClass("shown")) {
        
            hiddenWork.fadeIn(1000);
            $(this).text("Show Less");
        } else {
            
            hiddenWork.slideUp(1500);
            $(this).text("Show More");

        }
        
    });
    
    
    // Play With Testimonials
    
    var leftArrow = $(".testim i.fa-chevron-left"),
        rightArrow = $(".testim i.fa-chevron-right");
        
    function checkArrows() {
        
        $(".testim .man").first().hasClass("active") ? leftArrow.hide() : leftArrow.show();
        $(".testim .man").last().hasClass("active") ? rightArrow.hide() : rightArrow.show();
    }
    
    checkArrows();
    
    
    $(".testim i").on("click", function () {
        
        var activeMan = $(".testim .man.active");
        
        if ($(this).hasClass("fa-chevron-right")) {
            
            activeMan.fadeOut(500, function () {
                $(this).removeClass("active").next(".man").addClass("active").fadeIn();
                checkArrows();
            });
        } else {
            
            activeMan.fadeOut(500, function () {
                $(this).removeClass("active").prev(".man").addClass("active").fadeIn();
                checkArrows();
            });
        }
                                             
    });
    
    
    // go to our works from header 
    
    $("div.header button").click(function () {
        
        $("html, body").animate({
            scrollTop: $($(this).attr("data-section")).offset().top
        }, 1000);
        
    });
    
    // show menu
    
    $("body").on("click", "div.header span.menu", function () {
        
        var theList = $("div.header ul");
        
        if (theList.hasClass("hidden")) {
            
            theList.slideDown(1000, function () {
                
                $(this).removeClass("hidden");
            
            });
        } else {
            theList.slideUp(1000, function () {
                
                $(this).addClass("hidden");
            
            });
        }
    });
    
   
    $("div.header ul li").on("click", function () {
        
        $("html, body").animate({
            scrollTop: $($(this).attr("data-section")).offset().top
        }, 1000);
        
        
        if (!$(this).children().first().hasClass("fas")) {
            
            $(this).prepend("<i class>" + "</i>");
            $(this).find("i").addClass("fas fa-chevron-right");
        
            $(this).siblings("li").find("i").remove();
        
            
        
        }
    });
    
    
    
    // Close menu 
    
    $("div.header ul > i").on("click", function () {
        
        $(this).parent("ul").fadeOut(500);
    
    });
    
    
    // go to social media sites  
    
    $("div.contact form i").click(function () {
        
        window.open($(this).attr("data-site"), "_blank");

    });
    
    //  Go To Up Arrow
    
    $(window).scroll(function () {
        
        $(this).scrollTop() >= 400 ? $("body i.fa-arrow-up").fadeIn(500) : $("body i.fa-arrow-up").fadeOut(500);
    });
    
    $("body i.fa-arrow-up").click(function () {
        
        $("html, body").animate({
            scrollTop: 0
        }, 1000);

    });
    

});



