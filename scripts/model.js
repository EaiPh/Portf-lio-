let imgs= [
      "url('/assets/imagens/background-image1.jpg')",
      'url("/assets/imagens/background-image2.jpg")',
      "url('/assets/imagens/background-image3.jpg')",
      "url('/assets/imagens/background-image4.jpg')",
   ]

let pictureStatus= {
   clicked: false,
   zoom: function() {
      picture.classList.remove('removeZoom')
   },
   removeZoom: function() {
      picture.classList.remove('zoom')
   },
}

function isClicked() {
   return pictureStatus.clicked == true
}

let sideBarSet= {
   open: function() {
      aside.classList.add('sideBar')
   },
   close: function() {
      aside.classList.remove('sideBar')
   },
}

let carouselScroll= {
   left: function() {
      carousel.scrollLeft -= 500
   },
   right: function() {
      carousel.scrollLeft += 500
   },
}

const projectDate= [
   {month: 8, year: 2022,},
   {month: 9, year: 2022,},
   {month: 9, year: 2022},
   {month: 9, year: 2022,},
   {month: 9, year: 2022,},
   {month: 9, year: 2022,},
   {month: 5, year: 2022,},
   {month: 4, year: 2022,},
   {month: 1, year: 2022,},
]
const howLongHas= {
   
   currentDate: function() {
      
      let month= new Date().getMonth()
      let year= new Date().getFullYear()
      return [month, year]
      
   },
   projectDate: function(i) {
      return [projectDate[i].month, projectDate[i].year]
   },
   
   howManyTime: function() {
      
      let res;
      let i= 0
      while (i < projectDate.length) {
         
         let resMonth= Math.abs((this.currentDate()[0] + 1) - this.projectDate(i)[0])
         
         let resYear= Math.abs((this.currentDate()[1]) - this.projectDate(i)[1])
         
         if (resYear == 0) {
            
            res= `há ${resMonth > 1 ? resMonth + ' messes' : resMonth + ' mês'}`
            
         } else if (resYear == 1 && this.currentDate()[0] + 1 != 12) {
            
            let checkMonth= (12 - this.projectDate(i)[0]) + this.currentDate()[0] + 1
            res= checkMonth >= 12 ? `há ${Math.floor(checkMonth / 12)} ano` : `há ${checkMonth > 1 ? checkMonth + ' messes' : checkMonth + ' mês' }`
            
         } else { 
           res= `há ${resYear} anos`
         }
         
         setHowLogHas(res, i)
         i++
      }
      
   },
   
}
