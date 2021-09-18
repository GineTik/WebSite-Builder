import {NullOrEmptyOf} from './../until.js'

export default class BaseBlock {

    constructor(blockObject) {
        if(NullOrEmptyOf(blockObject)) {
            throw new Error('обьект не может быть создан с null(или пустыми) параметрами')
        }
        this.content = blockObject.content ?? ''
        this.styles = blockObject.styles ?? {}
        this.tag = blockObject.tag ?? 'div';
        this.options = blockObject;

        this.#create()
    }



    // html элементы
    // get, set
    #DOMBlock
    get DOMBlock() {
        return this.#DOMBlock
    }



    // create dom element
    #create() {
        this.#DOMBlock = document.createElement(this.tag)
        this.setStyles(this.setStylesForBlock(this.styles))

        if (!NullOrEmptyOf(this.options.href)) {
            this.#DOMBlock.href = this.options.href
        }

        this.#DOMBlock.innerHTML = this.getDOMContentString()
    }


    // получить контент(внетриности элемента) в ввиде строки
    getDOMContentString() {
        throw new Error('переопределите метод getContent')
    }








    // set styles for
    setStyles(styles) {
        if (!NullOrEmptyOf(styles)) {
            this.styles = styles
            setStylesForBlock(this.styles)
        }

    }
    // set style for dom element
    setStylesForBlock(styles) {
        if (!NullOrEmptyOf(styles)) {
            if(this.#DOMBlock != null) {
                for (let key in styles) {
                    this.#DOMBlock.style[key] = styles[key]
                }
            }
        }
    }
}