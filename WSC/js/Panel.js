import {NullOrEmptyOf} from './until.js'

export default class panel {
    constructor(selector, app) {
        this.app = app
        this.$body = document.querySelector(selector)
    }

    init(block) {
        if(NullOrEmptyOf(block)) {
            this.$body.innerHTML = ''
            return
        }

        this.selectedBlock = block
        this.styles = this.getStylesWith(this.selectedBlock.styles ?? {})

        let html = this.generateHTML()
        this.$body.innerHTML = `
            <form id="formStyles">
                ${html}
                <input type="submit" style="display: none">
            </form>
            <style>
                #formStyles {
                    padding: 10px;
                    box-sizing: border-box;
                    font-family: monospace;
                }
                #formStyles div > div {
                    display: flex;
                    justify-content: space-between;
                }
                #formStyles h3 {
                    width: 100%;
                    margin: auto 0 5px 0;
                }
                #formStyles input {
                    border: 1px solid #eee;
                    background: #fff;
                    font-family: monospace;
                    outline: 0;
                    padding: 5px;
                    width: 100%;
                    border-radius: 2px;

                    transition: .2s border;
                }
                #formStyles input:not(:last-child) {
                    margin-left: 1px;
                }
                #formStyles input:hover, #formStyles input:focus {
                    border: 1px solid blue;
                }
            </style>
        `
        document.getElementById('formStyles').addEventListener('submit', this.submitForm.bind(this))
    }

    submitForm(event) {
        event.preventDefault()
        let styles = {}

        for (let i = 0; i < event.target.elements.length; i++) {
            let input = event.target.elements[i]
            styles[input.name] = (styles[input.name] == null ? '' : styles[input.name] + ' ') + input.value 
        }
        
        this.selectedBlock.styles = styles
        this.app.init(null, this.selectedBlock)
    }

    getStylesWith(inStyles) {
        let outStyles = this.styles
        for(let key in inStyles) {
            outStyles[key] = inStyles[key].split(' ')
        }
        return outStyles
    }

    generateHTML() {
        if(NullOrEmptyOf(this.selectedBlock)) {
            return ''
        }
        let html = ''
        for(let key in this.blocksOfStyles) {
            html += this.blocksOfStyles[key]()
        }
        return html
    }


    styles = {
        margin: ['0', '0', '0', '0']
    }

    blocksOfStyles = {
        margin: () => `
            <div class="" id="margin">
                <h3>margin</h3>
                <div>
                    <input name="margin" type="text" value="${this.styles?.margin[0] ?? '0'}"/>
                    <input name="margin" type="text" value="${this.styles?.margin[1] ?? '0'}"/>
                    <input name="margin" type="text" value="${this.styles?.margin[2] ?? '0'}"/>
                    <input name="margin" type="text" value="${this.styles?.margin[3] ?? '0'}"/>
                <div>
            </div>
        `
    }
}