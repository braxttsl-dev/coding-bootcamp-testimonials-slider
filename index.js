const nextBtn = document.querySelector('#btnNext');
const prevBtn = document.querySelector('#btnPrev')
const tanya = document.querySelectorAll(".Tanya")
const john = document.querySelectorAll(".John")


nextBtn.addEventListener("click", ()=>{
    tanya.forEach(element => {
      element.style.display = "none" 
    })
    john.forEach(element => {
        element.style.display = "block" 
      })   
})

prevBtn.addEventListener("click", ()=>{
    john.forEach(element => {
      element.style.display = "none" 
    })
    tanya.forEach(element => {
        element.style.display = "block" 
      })   
})