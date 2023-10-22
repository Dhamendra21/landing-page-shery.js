Shery.imageEffect("#back",
 {style:4,config:{"uColor":{"value":false},
 "uSpeed":{"value":1,
 "range":[0.1,1],
 "rangep":[1,10]},
 "uAmplitude":{"value":1.98,"range":[0,5]},
 "uFrequency":{"value":3.5,"range":[0,10]},
 "geoVertex":{"range":[1,64],"value":3.08},
 "zindex":{"value":-9996999,
 "range":[-9999999,9999999]},
 "aspect":{"value":2.055194856103547},
 "gooey":{"value":true},"infiniteGooey":{"value":true},
 "growSize":{"value":4,"range":[1,15]},
 "durationOut":{"value":1,"range":[0.1,5]},
 "durationIn":{"value":1,"range":[0.1,5]},
 "displaceAmount":{"value":0.5},
 "masker":{"value":true},
 "maskVal":{"value":1.17,"range":[1,5]},
 "scrollType":{"value":0},
 "noEffectGooey":{"value":true},
 "onMouse":{"value":1},
 "noise_speed":{"value":0.58,
 "range":[0,10]},
 "metaball":{"value":0.2,
 "range":[0,2],"_gsap":{"id":3}},
 "discard_threshold":{"value":1,"range":[0,1]},
 "antialias_threshold":{"value":0,"range":[0,0.1]},
 "noise_height":{"value":0.5,"range":[0,2]},
 "noise_scale":{"value":10,"range":[0,100]}},
  gooey:true})
var elems = document.querySelectorAll(".elem")

elems.forEach((elems)=>{
    var h1s = elems.querySelectorAll("h1")
    var index = 0
    document.querySelector("#main")
    .addEventListener("click",()=>{
        gsap.to(h1s[index], {
            top:'-=100%',
            ease: Expo.easeInOut,
            duration:1,
            onComplete: ()=>{
                gsap.set(this._targets[0],{top:"100%"})
            }
        })
    
    
        index === h1s.length-1 ? (index = 0) : index++
        gsap.to(h1s[index], {
            top:'-=100%',
            ease: Expo.easeInOut,
            duration:1
        })
    })
})
