import AddBlock from './Blocks/AddBlock.js'
import {blocks, baseModel} from './Blocks/Blocks.js'
import {NullOrEmptyOf} from './until.js'

export default class Site {
    constructor(selector, app, model=null) {
        this.app = app
        this.selector = selector
        this.$body = document.querySelector(selector)
        if (NullOrEmptyOf(this.$body)) {
            throw new Error('передайте селектор существующего элемента')
        }
        this.setModel(model)

        this.$body.innerHTML += `
            <style>
                .add-button {
                    background: #fff
                }
                .add-button:hover {
                    background: #0000ff33
                }
                .wrapper-model {
                    position: fixed;
                    top: 0;
                    left: 0;
                    background: #000000bf;
                    width: 100%;
                    height: 100%;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .model {
                    width: 700px;
                    height: 500px;
                    background: #fff;
                    border-radius: 5px;
                    padding: 20px 10px 10px 20px;

                    display: flex;
                    flex-wrap: wrap;
                    align-items: flex-start;
                }
                .model-item {
                    margin: 0 10px 10px 0;
                    border: 3px solid blue;
                    border-radius: 5px;
                    cursor: pointer;
                    background: #fff;

                    min-width: 50px;
                    min-height: 50px;

                    transition: .15s filter;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .model-item:hover {
                    filter: brightness(50%);
                }
                .model-item > * {
                    margin: 0 !important;
                }
            </style>
        ` 
        // this.$body.append(this.getAddModalHTML())
    }

    setModel(model) {        
        this.model = model
        this.selectedBlocks = null
    }
    setClickCallback(callback) {
        this.#setPropToAllBlocks('click', callback)
    }
    #setPropToAllBlocks(prop, value, block=this.model) {
        block[prop] = value

        if (NullOrEmptyOf(block.content) || typeof block.content === 'string') return
        for(let key in block.content) {
            this.#setPropToAllBlocks(prop, value, block.content[key])
        }
    }

    init(model=this.model) {
        this.setModel(model)
        this.#setPropToAllBlocks('app', this.app)

        if (NullOrEmptyOf(this.model)) {
            throw new Error('model == null, передайте model в параметры или в конструктор класса!')
        }

        this.$body.append(this.model.DOMBlock)
    }


    searchBlocksForClassName(name, block=this.model) {
        let bs = []
        if(block instanceof blocks[name]) bs.push(block)
        for(let key in block.content) {
            Object.assign(bs, this.searchBlocksForClassName(name, block.content[key]))
        }

        return bs
    }
}