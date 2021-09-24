import BoxBlock from "./BoxBlock.js";
import TextBlock from "./TextBlock.js";
import AddBlock from "./AddBlock.js";

export var baseModel = {
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

var blocks = {
    TextBlock,
    BoxBlock,
    AddBlock
}
export default blocks