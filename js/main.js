import blocks from './Blocks/Blocks.js'
import App from './App.js'
import Site from './Site.js'


var baseModel = {
    siteWrapper: (content) => new blocks['BoxBlock']({
        content: content,
        tag: 'div',
        styles: {
            width: '100%',
            height: '100%'
        }
    }),
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

let model = baseModel.siteWrapper([
    baseModel.h1(),
    baseModel.navbar(),
    baseModel.addBlock()
])

let app = new App('#app')
app.init(model)