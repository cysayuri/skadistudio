let openModal = document.querySelectorAll(".projs__list-item");
const modal = document.querySelector(".modal");
let modalContent = document.querySelectorAll(".modal__content");
const closeModal = document.querySelector(".close");

openModal.forEach(elem => {
    elem.addEventListener('click', () => {
        modal.classList.add('active')
        
        modalContent.forEach(idx => {
            idx.classList.remove('active')
        })
        
        itemId = elem.getAttribute('id')
        
        modalContent.forEach(idx => {
            modalId = idx.getAttribute('id')
            
            if (('modal-' + itemId) == modalId) {
                idx.classList.add('active')
            }
        })
    })
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('active')
})

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('active')
    }
}