let actForm = document.querySelector('[data-actForm]');
let form = document.querySelector('[data-form]')
let btnEnvia = document.querySelector('[data-enviar]')

actForm.addEventListener('click',()=>{
    form.classList.remove('invisible');
}); 

btnEnvia.addEventListener('click',()=>{
    form.classList.add('invisible');
}); 