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
        return ''
    }


    afterCreate(block) {
        if(NullOrEmptyOf(block)) return

        block.onclick = this.click.bind(this)
        console.log(block);
    }

    click(event) {
        console.log(this);
    }

}