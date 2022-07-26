// Declarar Variables
let inputSpacing = document.querySelector('#spacing')
let inputBlur = document.querySelector('#blur')
let inputBase = document.querySelector('#base')

// Modificar Valores Base
inputBase.value = inputBase.getAttribute('value')
inputBlur.value = inputBlur.getAttribute('value')
inputSpacing.value = inputSpacing.getAttribute('value')

// Eventos
inputSpacing.addEventListener('mousemove', ()=>{
    let spacingValue = inputSpacing.value+inputSpacing.dataset.sizing;
    document.documentElement.style.setProperty('--spacing', spacingValue)
})

inputBlur.addEventListener('mousemove', ()=>{
    let spacingBlur = inputBlur.value+inputBlur.dataset.sizing;
    document.documentElement.style.setProperty('--blur', spacingBlur)
})

inputBase.addEventListener('input',()=>{
    let spacingBase = inputBase.value
    document.documentElement.style.setProperty('--base', spacingBase)
})

inputBase.addEventListener('change',()=>{
    let spacingBase = inputBase.value
    document.documentElement.style.setProperty('--base', spacingBase)
})


