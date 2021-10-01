import {NullOrEmptyOf} from '../until.js'

export default class BaseBlock {

    constructor(blockObject) {
        if(NullOrEmptyOf(blockObject)) {
            throw new Error('обьект не может быть создан с null(или пустыми) параметрами')
        }
        this.content = blockObject.content ?? ''
        this.styles = blockObject.styles ?? {}
        this.tag = blockObject.tag ?? 'div';
        this.click__callback = blockObject.click__callback ?? this.click__callback;
        this.options = blockObject;

        this.parent = null

        // this.#create()

        if (NullOrEmptyOf(this.content) || typeof this.content === 'string') return
        for(let key in this.content) {
            this.content[key].parent = this 
        }
    }

    // html элементы
    // get, set
    #DOMBlock
    get DOMBlock() {
        this.#create()
        return this.#DOMBlock
    }
    GetHTMLBlock() {
        return this.#DOMBlock
    }


    click__callback(event) {
        event.preventDefault()
        if(this.GetHTMLBlock() == event.target) {
            this.app.initPanel(this)
        }
    }


    // create dom element
    #create() {
        this.#DOMBlock = document.createElement(this.tag)
        this.setStyles(this.setStylesForBlock(this.styles))
        for(let key in this.options.attr ?? {}) {
            this.GetHTMLBlock().setAttribute(key, this.options.attr[key])
        }

        if (!NullOrEmptyOf(this.options.href)) {
            this.GetHTMLBlock().href = this.options.href
        }

        this.setContent()
        this.GetHTMLBlock().onclick = this.click__callback.bind(this)

        if(!NullOrEmptyOf(this.afterCreate) && typeof this.afterCreate === 'function') {
            this.afterCreate(this.#DOMBlock)
        }
    }

    setContent() {
        let content = this.getDOMContentString()
        this.GetHTMLBlock().innerHTML = ''
        for(let key in content) {
            this.GetHTMLBlock().append(content[key])
        }
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
            if(this.GetHTMLBlock() != null) {
                for (let key in styles) {
                    this.GetHTMLBlock().style[key] = styles[key]
                }
            }
        }
    }
}