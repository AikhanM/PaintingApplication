import View from './view.js'
import Model from './model.js'
import Controller from './controller.js'
import '../css/style.css'

window.addEventListener("DOMContentLoaded",()=>{
    const view=new View()
    const model=new Model()
    const controller=new Controller(view,model)
    controller.init()
})

window.addEventListener("DOMContentLoaded",initialize)