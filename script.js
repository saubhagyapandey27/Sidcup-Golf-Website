// To make the circle around Cursor effect
var crsr= document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    // console.log(dets.x)
    crsr.style.left=dets.x+25+"px"
    crsr.style.top=dets.y+"px"
})

// To make big blur behind cursor effect
var blur= document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    blur.style.left=dets.x-250+"px"
    blur.style.top=dets.y-250+"px"
})

// To make the special effect on cursor as we move over any h4 in nav 
var h4all= document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95C11E"
        crsr.style.backgroundColor="#95C11E"
    })
})

// To darken the navigation bar as we scroll down
gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

// To darken the colour of main div as we scroll down to successive page 
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -100%",
        scrub:3
    }
})

// To apply scroll effect on page2 about-us
gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})

// To apply scroll effect on page2 cards
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

// To apply scroll effect on page3 Colons
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }
})

// To apply scroll effect on page4 h1
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})