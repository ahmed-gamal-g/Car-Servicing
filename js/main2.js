$(document).ready(function(){

    
$(document).scroll(function(){

    if($(document).scrollTop() >= 10){
        $(".nav11").css({
            "color" : "rgb(0, 204, 255)",
        })

    }
    else{
        $(".nav11").css({
            "color" : "white",
        })

    }
    if($(document).scrollTop() >= 1000) {
        $(".nav22").css({
            "color" : "rgb(0, 204, 255)",
        })

        $(".nav11").css({
            "color" : "white",
        })

    }
    else{
        $(".nav22").css({
            "color" : "white",
        })

    }
    

})

})