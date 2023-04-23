let listElements = document.querySelectorAll('.list_button--click')
listElements.forEach(listElements => 
    {listElements.addEventListener('click', ()=>{
        listElements.classList.toggle('arrow');
    })
});