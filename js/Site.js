import AddBlock from './Blocks/AddBlock.js'
import {NullOrEmptyOf} from './until.js'

export default class Site {
    constructor(selector, model=null) {
        this.selector = selector
        this.$body = document.querySelector(selector)
        if (NullOrEmptyOf(this.$body)) {
            throw new Error('передайте селектор существующего элемента')
        }
        this.setModel(model)

        this.$body.innerHTML += `
            <style>
                .add-button:hover {
                    background: #0000ff33
                }
            </style>
        `
    }
    addBlock(event) {
        console.log(this);
    }

    setModel(model) {
        this.model = model
        this.selectedBlocks = null
    }

    init(model=this.model) {
        this.setModel(model)


        if (NullOrEmptyOf(this.model)) {
            throw new Error('model == null, передайте model в параметры или в конструктор класса!')
        }

        this.$body.append(this.model.DOMBlock)
    }
}