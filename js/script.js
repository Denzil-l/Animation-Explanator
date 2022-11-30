//Math.floor() - (2.1) = 2, (2.5) = 2, (2.9) = 5, 3 = 3
//Math.round() - (2.1) = 2, (2.5) = 3, (2.9) = 3, 3 = 3
//Math.min() - (1,2,3) = 1
//Math.max() - (1,2,3) = 3
//Math.pow() - (2,3) = 2^3 = 8
//Math.random() - число в диапазоне 0-1
//Math.sign() - (-3) = -1, (3) = 1, (0) = 0, (-4324) = -1, (32144) = 1
//Math.sqrt() - (9) = 3
//Math.trunc() - (1.321321312) = 1, (-32.412412) = -32

// arr.push(...items) – добавляет элементы в конец,
// arr.pop() – извлекает элемент из конца,
// arr.shift() – извлекает элемент из начала,
// arr.unshift(...items) – добавляет элементы в начало.

// ARRAY.splice(index[, deleteCount, elem1, ..., elemN]) Работает как все что сверху вместе





const buttons = document.querySelectorAll('.item')
const loadTitle = document.querySelector('.loading__title')
const welcomeScene = document.querySelector('.welcome-scene')
const animbuttons = document.querySelector('.block-button')
const animcontent = document.querySelector('.block-content')
const animblock = document.querySelector('.block')
const animTitle = document.querySelector('.title-animation')
const animDescription = document.querySelector('.description-animation')
const animGhost = document.querySelector('.ghost')
const animation = document.querySelector('.anim-block')
const animButton = document.querySelector('.play')
const animtext =  document.querySelector('.anim-text')
const item = document.querySelectorAll('.item')
console.log(item)
  


animcontent.style.display = 'none'
function BtnReset() {
    animGhost.style.animationName = 'none'
    animGhost.style.animationDuration = '2s'
    animGhost.style.animationTimingFunction = 'linear'
    animGhost.style.animationDelay = '0s'
    animGhost.style.animationIterationCount = '1'
    animGhost.style.animationDirection = 'normal'
    animGhost.style.animationFillMode = 'none'
    animGhost.style.animationPlayState = 'running'

   
}

    



function LogicText(i) {
    switch (true) {
        case i === 0:
                BtnReset()
                animtext.innerHTML = "Delay = 2s" 
                animTitle.innerHTML = 'Animation-delay'
                animDescription.innerHTML = 'The animation-delay CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.'
                animGhost.id = '1'

            break;
        case i === 1:
            BtnReset()
            animtext.innerHTML = "Direction = Reverse"
                animTitle.innerHTML = 'animation-direction'
                animDescription.innerHTML = 'The animation-direction CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.'
                animGhost.id = '2'

            break;
        case i === 2:
            BtnReset()
            animtext.innerHTML = "Duration 5s"

                animTitle.innerHTML = 'animation-duration'
                animDescription.innerHTML = 'The animation-duration CSS property sets the length of time that an animation takes to complete one cycle.'
                animGhost.id = '3'

            break;
        case i === 3:
            BtnReset()
            animtext.innerHTML = "Iteration-count = 3"

                animTitle.innerHTML = 'animation-iteration-count'
                animDescription.innerHTML = 'The animation-fill-mode CSS property sets how a CSS animation applies styles to its target before and after its execution.'
                animGhost.id = '4'

            break;
        case i === 4:
            BtnReset()
            animtext.innerHTML = "Timing-Function = steps(5,end)"

                animTitle.innerHTML = 'animation-timing-function'
                animDescription.innerHTML = 'The animation-iteration-count CSS property sets the number of times an animation sequence should be played before stopping.'
                animGhost.id = '5'

            break;
        case i === 5:
            BtnReset()
            animtext.innerHTML = "Play-State = Paused <br> Touch the ghost"

                animTitle.innerHTML = 'animation-play-state'
                animDescription.innerHTML = 'The animation-name CSS property specifies the names of one or more @keyframes at-rules that describe the animation to apply to an element. Multiple @keyframe at-rules are specified as a comma-separated list of names. If the specified name does not match any @keyframe at-rule, no properties are animated.'
                animGhost.id = '6'

            break;
        case i === 6:
            BtnReset()
            animtext.innerHTML = "Name it's Name :)"

                animTitle.innerHTML = 'animation-name'
                animDescription.innerHTML = 'The animation-play-state CSS property sets whether an animation is running or paused.'
                animGhost.id = '7'

            break;
        case i === 7:
            BtnReset()
            animtext.innerHTML = "Fill-Mode = Forward "

                animTitle.innerHTML = 'animation-fill-mode'
                animDescription.innerHTML = 'The animation-timing-function CSS property sets how an animation progresses through the duration of each cycle.'
                animGhost.id = '8'

            break;
    
        default:
            break;
    }
}
function LogicAnimation() {
    switch (true) {
        case animGhost.id === "1":
            setTimeout(() => {
                BtnReset()     
            }, 50)
                
                setTimeout(() => {
                    animGhost.style.animationName = 'anim1'
                    animGhost.style.animationDelay = '2s'    
                }, 100)
            break;
        case animGhost.id === "2":
            setTimeout(() => {
                BtnReset()     
            }, 50)
            setTimeout(() => {
            animGhost.style.animationName = 'anim2'
            animGhost.style.animationDirection = 'reverse'
        }, 100)
            break;
        case animGhost.id === "3":
            setTimeout(() => {
                BtnReset()     
            }, 50)
            setTimeout(() => {
            animGhost.style.animationName = 'anim3'
            animGhost.style.animationDuration = '5s'  
            animtext.innerHTML += "<br>"
        }, 100)
           
     
            break;
        case animGhost.id === "4":
            setTimeout(() => {
                BtnReset()     
            }, 50)
            setTimeout(() => {
            animGhost.style.animationName = 'anim4'
            animGhost.style.animationIterationCount = '3'
        }, 100)
            break;
        case animGhost.id === "5":
            setTimeout(() => {
                BtnReset()     
            }, 50) 
            setTimeout(() => {
            animGhost.style.animationName = 'anim5'
            animGhost.style.animationTimingFunction = 'steps(5, end)'
            }, 100)
            break;
        case animGhost.id === "6":
            setTimeout(() => {
                BtnReset()     
            }, 50)
            setTimeout(() => {
                animGhost.style.animationName = 'anim6'

                animGhost.addEventListener('mouseover', () => {
                    animGhost.style.animationPlayState = 'paused'
    
                })
                animGhost.style.animationName = 'anim6'

                animGhost.addEventListener('mouseout', () => {
                    animGhost.style.animationPlayState = 'running'
    
                })
            }, 100)
           

            break;
        case animGhost.id === "7":
            setTimeout(() => {
                BtnReset()     
            }, 50)
            setTimeout(() => {
            animGhost.style.animationName = 'anim7'
        }, 100)
            break;
        case animGhost.id === "8":
            setTimeout(() => {
                BtnReset()     
            }, 50)
            setTimeout(() => {
                animGhost.style.animationName = 'anim8'
                animGhost.style.animationFillMode = 'forwards'
            }, 150)
            
            break;
    
        default:
            break;
    }
}



function Open(i){
    buttons[i].addEventListener('click', () =>{ 
        setTimeout(() => {
            buttons[5].style.borderRadius = '0px 0px 0px 0px'
            buttons[7].style.borderRadius = '0px 0px 0px 0px'
            
        },1000)
        setTimeout(() => {
            animcontent.style.display = 'flex'
            animcontent.style.height = '600px'
            for (let i = 0; i < 8; i++) {
                item[i].style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                
            }
        },2000)
        animblock.style.height = '750px'
        LogicText(i)
        animButton.addEventListener('click', LogicAnimation)

    })
}
for (let i = 0; i < 8; i++) {Open(i)}
function loadPoints(msec,str) {
    setTimeout(() => {
        loadTitle.innerHTML = str
    }, msec)
}
loadPoints(1000,'Loading..')
loadPoints(1500,'Loading...')
loadPoints(2000,'Loading..')
loadPoints(2500,'Loading...')
loadPoints(3000,'Loading..')
loadPoints(3500,'Loading...')
loadPoints(4000,'Loading..')
loadPoints(4500,'Loading...')
loadPoints(5000,'Loading..')
loadPoints(5500,'Loading...')
loadPoints(6000,'Loading..')
loadPoints(6500,'Loading...')
setTimeout(() => {
welcomeScene.style.display = 'none'
}, 16000)




