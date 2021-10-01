import { NullOrEmptyOf } from '../until.js'
import BaseBlock from './BaseBlock.js'
import {presentBlocks} from './Blocks.js'

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
                margin: blockObject.styles?.margin ?? '20px auto 20px auto',
                display: blockObject.styles?.display ?? 'block',
                // outline: blockObject.styles?.outline ?? '2px solid #fff'
            }
        }
        super(blockObject)
    }



    // получить контент(внутриности элемента) в ввиде строки
    getDOMContentString() {
        return ''
    }


    // вызываеться после созлания html элемента
    // afterCreate(block) {
    //     block.addEventListener('click', (event) => console.log(event.target.onclick))
    // }

    click__callback(event) {
        this.app.site.$body.append(this.createAddModalHTML())
    }
    addBlock(blockName, e) {
        let length = this.parent.content.length
        this.parent.content.splice(length-1, 0, presentBlocks[blockName]);
        this.app.initSite()
        this.WrapperModal.click()
    }


    createAddModalHTML() {
        // create wrapper modal
        this.WrapperModal = document.createElement('div')
        let WrapperModal = this.WrapperModal
        WrapperModal.onclick = function (e) {
            if(this == e.target) {
                this.remove()
            }
        }
        WrapperModal.className = 'wrapper-model'

        // create modal
        let Modal = document.createElement('div')
        Modal.className = 'model'

        // add modal to wrapper modal
        WrapperModal.append(Modal)

        // set element in modal
        for(let key in presentBlocks) {
            let ModalItem = document.createElement('div')
            ModalItem.className = 'model-item'
            ModalItem.append(presentBlocks[key].DOMBlock)
            ModalItem.onclick = this.addBlock.bind(this, key)
            Modal.append(ModalItem)
        }

        //return full modal
        return WrapperModal
    }

}