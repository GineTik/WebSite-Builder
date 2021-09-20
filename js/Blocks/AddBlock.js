import { NullOrEmptyOf } from '../until.js'
import BaseBlock from './BaseBlock.js'

export default class AddBlock extends BaseBlock {

    constructor(blockObject={}) {
        blockObject = {
            content: '',
            tag: 'div',
            attr: {
                class: 'add-button'
            },
            styles: {
                border: '2px solid blue',
                borderRadius: '20px',
                width: blockObject.styles?.width ?? '100%',
                height: blockObject.styles?.height ?? '200px',
                cursor: 'pointer',
                margin: '20px 0 0 0'
            }
        }
        super(blockObject)
    }



    // получить контент(внутриности элемента) в ввиде строки
    getDOMContentString() {
        let content = ''
        for(let i = 0; i < this.content.length; i++) {
            // задаю наследникам свойство родителя
            this.content[i].parent = this
            // соединяю все блоки в одну строку
            content += this.content[i].DOMBlock.outerHTML
        }
        return content
    }


    // callbackCreate(block) {
    //     if(NullOrEmptyOf(block)) return

    //     block.onclick = this.#click?.bind(this) ?? null
    // }

    #click = null
    #DOMBlock
    set click(callback) {
        if(NullOrEmptyOf(callback)) return
        this.#click = callback
        console.log(this.#click);
        this.#DOMBlock.onclick = this.#click.bind(this)
    }
    // click(event) {
    //     console.log(this);
    // }

}