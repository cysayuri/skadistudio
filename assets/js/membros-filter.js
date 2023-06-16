const organizacoesFilter = document.querySelector('.organizacoes__filter');

if(typeof(organizacoesFilter) != 'undefined' && organizacoesFilter != null){
    const filterOption = document.querySelectorAll('.organizacoes__filter-option')
    
    filterOption.forEach(elem => {
        elem.addEventListener('click', () => {
            filterOption.forEach(idx => {
                idx.classList.remove('active')
            })
            
            elem.classList.add('active')
        })
    })
}