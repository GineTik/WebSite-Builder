import blocks from './Blocks/Blocks.js'
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
        })],
        tag: 'div'
    })
}

let model = [
    baseModel.h1(),
    baseModel.navbar(),
]

let site = new Site().init(model)