const modalButtons = document.querySelectorAll('#show-modal')
modalButtons.forEach(modalHandler)
function modalHandler(item){
    item.addEventListener('click' , openModal)
}
function openModal (){
    console.log(this.dataset.modalButton) 
    const modalId = this.dataset.modalButton
    const modal = document.getElementById(modalId)
    modal.classList.add('fade-block--v')
    const btnClose = modal.querySelector('[data-modal-close]')

btnClose.addEventListener('click' , function () {
    modal.classList.remove('fade-block--v')
})

modal.addEventListener('click' , function () {
    modal.classList.remove('fade-block--v')
})

modal.querySelector('.modal-window').addEventListener('click' , (e) =>{
    e.stopPropagation()
})}



