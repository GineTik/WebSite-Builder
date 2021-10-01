import BaseBlock from './BaseBlock.js'
import {NullOrEmptyOf} from '../until.js'


export default class TextBlock extends BaseBlock {

    constructor(blockObject) {
        if(!NullOrEmptyOf(blockObject)) {
            if(!typeof blockObject.content === 'string') {
                blockObject.content = ''
            }
        }
        super(blockObject)
    }


    // добавить контент
    addChild(block) {
        this.content.push(block)
    }


    // получить контент(внетриности элемента) в ввиде строки
    getDOMContentString() {
        return this.content // тут просто текст
    }

}