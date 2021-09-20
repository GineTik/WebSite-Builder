import blocks from './Blocks/Blocks.js'
import App from './App.js'
import Site from './Site.js'


var baseModel = {
    h1: () => new blocks['TextBlock']({
        content: 'text',
        tag: 'h1'
    }),
    navbar: () => new blocks['BoxBlock']({
        content: [new blocks['TextBlock']({
                content: 'text',
                tag: 'h1'
            }),
            new blocks['TextBlock']({
                content: 'text',
                tag: 'h2',
                styles: {
                    margin: '0 0 0 20px',
                    color: 'blue'
                }
            })
        ],
        tag: 'div'
    }),
    addBlock: () => new blocks['AddBlock']()
}

let model = [
    baseModel.h1(),
    baseModel.navbar(),
    baseModel.addBlock()
]

let app = new App('#app')
app.init(model)