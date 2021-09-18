import {NullOrEmptyOf} from './until.js'

export default class Site {
    constructor(model=null) {
        this.setModel(model)
    }

    setModel(model) {
        this.model = model
        this.selectedBlocks = [model]
    }

    init(model=this.model) {
        this.setModel(model)


        if (NullOrEmptyOf(this.model)) {
            throw new Error('model == null, передайте model в параметры или в конструктор класса!')
        }

        for(let i = 0; i < this.model.length; i++) {
            document.body.append(this.model[i].DOMBlock)
            // console.log(this.model[i], this.model[i].DOMBlock)
        }
    }
}