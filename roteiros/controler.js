let picture= document.querySelector('#picture')
let openSideBar= document.querySelector('#sideShortCut')
let closeSideBar= document.querySelector('#closeBar')
let aside= document.querySelector('#aside')
let seeMore= document.querySelector('#seeMore')
let carousel= document.querySelector('#containerProject')
let rowsTechs= document.querySelectorAll('.row2')
let header= document.querySelector('header')
let span= document.querySelectorAll('.done')

// Slider
let i= 0
function slider() {
   i == 3 ? i = 0 : i++
   header.style.backgroundImage= imgs[i]
}

setInterval(slider, 2000)

picture.addEventListener('click', () => {
   
   picture.classList.contains("zoom") ? pictureStatus.clicked= false : pictureStatus.clicked= true
   
   if (isClicked()) {
      picture.classList.add("zoom")
      pictureStatus.zoom()
   } else {
      picture.classList.add("removeZoom")
      pictureStatus.removeZoom()
   }
   
})

openSideBar.addEventListener('click', sideBarSet.open)
closeSideBar.addEventListener('click', sideBarSet.close)

let seeLess= false
seeMore.addEventListener('click', () => {
   
   let i=0
   
   if (!seeLess) {
      while (i < 3) {
         rowsTechs[i].classList.remove('row2')
         i++
      }
      seeMore.innerHTML= `ver menos <ion-icon name="chevron-up-outline" tabindex="0"></ion-icon>`
      seeLess= true
   } else {
     while (i < 3) {
         rowsTechs[i].classList.add('row2')
         i++
      }
      seeMore.innerHTML= `ver mais <ion-icon name="chevron-down-outline" tabindex="0"></ion-icon>`
      seeLess= false
   }
   
})

let arrowLeft= document.querySelector('#arrowLeft')
let arrowLRight= document.querySelector('#arrowRight')

arrowLeft.addEventListener('click', carouselScroll.left)
arrowRight.addEventListener('click', carouselScroll.right)

howLongHas.howManyTime()
function setHowLogHas(res, i) {
   span[i].innerHTML= res
}