const moreBtn = document.querySelector('.more__btn');

if(typeof(moreBtn) != 'undefined' && moreBtn != null){
    const moreList = document.querySelector('.more__list')
    
    moreBtn.addEventListener('click', () => {
        moreBtn.classList.add('disabled')
        moreList.classList.add('active')
    })
}