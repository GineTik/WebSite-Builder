import BaseBlock from './BaseBlock.js'
import {NullOrEmptyOf} from './../until.js'

export default class BoxBlock extends BaseBlock {

    constructor(blockObject) {
        if(!NullOrEmptyOf(blockObject)) {
            if(!(blockObject.content instanceof Array)) {
                blockObject.content = [blockObject.content]
            }
        }
        super(blockObject)
    }


    addChild(block) {
        this.content.push(block)
    }

    // получить контент(внутриности элемента) в ввиде строки
    getDOMContentString() {
        let content = ''
        for(let i = 0; i < this.content.length; i++) {
            content += this.content[i].DOMBlock.outerHTML
        }
        return content
    }

}