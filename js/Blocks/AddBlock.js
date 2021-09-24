import { NullOrEmptyOf } from '../until.js'
import BaseBlock from './BaseBlock.js'
import {baseModel} from './Blocks.js'

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
                width: blockObject.styles?.width ?? '200px',
                height: blockObject.styles?.height ?? '30px',
                cursor: 'pointer',
                margin: '20px auto 0 auto'
            }
        }
        super(blockObject)
    }



    // получить контент(внутриности элемента) в ввиде строки
    getDOMContentString() {
        return ''
    }


    // вызываеться после созлания html элемента
    afterCreate(block) {
        block.onclick = this.click.bind(this)
    }

    click(event) {
        this.parent.addChild(baseModel.h1())
    }

}