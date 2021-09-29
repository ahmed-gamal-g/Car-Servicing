$(document).ready(function(){

$(".c-me").click(function(){

    $(".c-one").slideToggle(2000 , function(){

        $(".c-two").slideDown(2000)
        $(".c-me").hide()
        $(".c-mee").show()
        
    })

    $(".c-mee").click(function(){
        $(".c-one").slideUp(2000 , function(){
            $(".c-two").slideUp(2000)
            $(".c-me").show()
            $(".c-mee").hide()
        })
    })

})




$(".one").click(function(){

   
        
    // $(".my-bg").fad(2000, )
    // $(".my-bg").slideDown(2000, )
 

$(".my-bg").css({

   

    "background-image" :  " linear-gradient(rgb(0 0 0 / 24%) , rgb(0 0 0 / 24%)) , url(https://www.datocms-assets.com/8576/1583528247-blogimg3.jpg)",
    "background-repeat" : "no-repeat",
    "background-size" : "cover",
    "width" : "100%",
    "height" : "650px",
    "borderRadius" : "10px"
    

})



})
$(".two").click(function(){

    // $(".my-bg").slideUp(2000, )
    // $(".my-bg").slideDown(2000, )
 

$(".my-bg").css({
    
    "background-image" : " linear-gradient(rgb(0 0 0 / 24%) , rgb(0 0 0 / 24%)) , url(https://di-uploads-pod5.dealerinspire.com/fletcherjonesporscheofhawaii/uploads/2018/07/Porsche-Service-2.jpg)",
    "background-repeat" : "no-repeat",
    "background-size" : "cover",
    "width" : "100%",
    "height" : "650px"

})

})
$(".three").click(function(){


    // $(".my-bg").slideUp(2000, )
    // $(".my-bg").slideDown(2000, )
 
$(".my-bg").css({

    "background-image" : "linear-gradient(rgb(0 0 0 / 24%) , rgb(0 0 0 / 24%)) ,  url(https://cdn.wearemarmalade.co.uk/wam/2020-12/car-service.jpg)",
    "background-repeat" : "no-repeat",
    "background-size" : "cover",
    "width" : "100%",
    "height" : "650px"

})

})
$(".four").click(function(){


    // $(".my-bg").slideUp(2000, )
    // $(".my-bg").slideDown(2000, )
 

$(".my-bg").css({

    "background-image" : "linear-gradient(rgb(0 0 0 / 24%) , rgb(0 0 0 / 24%)) ,  url(https://i.pinimg.com/originals/7e/84/ef/7e84efb67b7831d47a9432e8e4745810.jpg)",
    "background-repeat" : "no-repeat",
    "background-size" : "cover",
    "width" : "100%",
    "height" : "650px"

})

})
$(".five").click(function(){



    // $(".my-bg").slideUp(2000, )
    // $(".my-bg").slideDown(2000, )
 

$(".my-bg").css({

    "background-image" : "linear-gradient(rgb(0 0 0 / 24%) , rgb(0 0 0 / 24%)) ,  url(https://www.seat.eg/content/countries/eg/seat-website/en/seat-cars/car-maintenance/_jcr_content/article/singleimage/singleimageimage.resizedViewPort.noscale.assetRootXL.jpg)",
    "background-repeat" : "no-repeat",
    "background-size" : "cover",
    "width" : "100%",
    "height" : "650px"

})

})

$(".sex").click(function(){


    // $(".my-bg").slideUp(2000, )
    // $(".my-bg").slideDown(2000, )
 

$(".my-bg").css({

    "background-image" : "linear-gradient(rgb(0 0 0 / 24%) , rgb(0 0 0 / 24%)) ,  url(https://grimmermotors.co.nz/wp-content/uploads/2017/11/oil-horizontal.png)",
    "background-repeat" : "no-repeat",
    "background-size" : "cover",
    "width" : "100%",
    "height" : "650px"

})

})

$(".button1").click(function(){

    $(".my-span5").slideDown(2000)
    $(".button1").hide()
    $(".button11").show()

    $(".button11").click(function(){

        $(".my-span5").slideUp(2000) 
        $(".button11").hide()
        $(".button1").show()
      
   
       }) 

})
$(".button2").click(function(){

    $(".my-span55").slideDown(2000)
    $(".button2").hide()
    $(".button22").show()

    $(".button22").click(function(){

     $(".my-span55").slideUp(2000) 
     $(".button22").hide()
     $(".button2").show()  

    })   

})
$(".button3").click(function(){

    $(".my-span555").slideDown(2000)
    $(".button3").hide()
    $(".button33").show()

    $(".button33").click(function(){

        $(".my-span555").slideUp(2000)
        $(".button33").hide()
        $(".button3").show()
    })

})
$(".button4").click(function(){

    $(".my-span5555").slideDown(2000)
    $(".button4").hide()
    $(".button44").show()

})

$(".button44").click(function(){

    $(".my-span5555").slideUp(2000)
    $(".button44").hide()
    $(".button4").show()
})



$(document).scroll(function(){

    if($(document).scrollTop() >= 10){
        $(".nav1").css({
            "color" : "rgb(0, 204, 255)",
        })

    }
    else{
        $(".nav1").css({
            "color" : "white",
        })

    }
    if($(document).scrollTop() >= 1000) {
        $(".nav2").css({
            "color" : "rgb(0, 204, 255)",
        })

        $(".nav1").css({
            "color" : "white",
        })

    }
    else{
        $(".nav2").css({
            "color" : "white",
        })

    }
    if($(document).scrollTop() >= 2500) {
        $(".nav3").css({
            "color" : "rgb(0, 204, 255)",
        })

        $(".nav2").css({
            "color" : "white",
        })

    }
    else{
        $(".nav3").css({
            "color" : "white",
        })

    }
    if($(document).scrollTop() >= 3500) {
        $(".nav4").css({
            "color" : "rgb(0, 204, 255)",
        })

        $(".nav3").css({
            "color" : "white",
        })

    }
    else{
        $(".nav4").css({
            "color" : "white",
        })

    }
    if($(document).scrollTop() >= 4500) {
        $(".nav5").css({
            "color" : "rgb(0, 204, 255)",
        })

        $(".nav4").css({
            "color" : "white",
        })

    }
    else{
        $(".nav5").css({
            "color" : "white",
        })

    }
    if($(document).scrollTop() >= 5500) {
        $(".nav6").css({
            "color" : "rgb(0, 204, 255)",
        })

        $(".nav5").css({
            "color" : "white",
        })

    }
    else{
        $(".nav6").css({
            "color" : "white",
        })

    }
    if($(document).scrollTop() >= 6500) {
        $(".nav7").css({
            "color" : "rgb(0, 204, 255)",
        })

        $(".nav6").css({
            "color" : "white",
        })

    }
    else{
        $(".nav7").css({
            "color" : "white",
        })

    }
    
    

})


})

let logo = document.querySelector(".logo-up");

window.onscroll = function () {
    // console.log(this.scrollY);
    if (this.scrollY >= 800) {
        logo.classList.add("show")
    } else {
        logo.classList.remove("show")
    }
}

// animat.wow
new WOW().init();