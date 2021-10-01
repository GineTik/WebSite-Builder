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
        },
        click__callback: function(event) {
            if(this.GetHTMLBlock() == event.target) {
                this.app.initPanel(null)
            }
        }
    }),
    h1: (text) => new blocks['TextBlock']({
        content: text ?? 'text',
        tag: 'h1',
        styles: {
            display: 'inline-block',
            margin: '0 0 0 0'
        }
    }),
    link: (text, href) => new blocks['TextBlock']({
        content: text,
        tag: 'a',
        href: href,
        styles: {
            color: '#000',
            'text-decoration': 'none',
            margin: '10px 0 0 0'
        }
    }),
    link_white: (text, href) => new blocks['TextBlock']({
        content: text,
        tag: 'a',
        href: href,
        styles: {
            color: '#fff',
            'text-decoration': 'none',
            margin: '0 0 0 15px'
        }
    }),
    navbar: () => new blocks['BoxBlock']({
        content: [
            baseModel.h1('text'),
            new blocks['BoxBlock']({
                content: [
                    baseModel.link_white('ссылка 1', 'link'),
                    baseModel.link_white('ссылка 1', 'link'),
                    baseModel.link_white('ссылка 1', 'link'),
                    baseModel.link_white('ссылка 1', 'link'),
                    baseModel.addBlock('inline-block')
                ],
                styles: {
                    margin: '0 0 0 10px',
                    color: '#fff',
                    display: 'flex',
                    'justify-content': 'flex-start',
                    'align-items': 'center',
                }
            })
        ],
        styles: {
            background: '#333',
            color: '#fff',
            padding: '10px 10px 10px 10px',
            display: 'flex'
        },
        tag: 'div'
    }),
    addBlock: (display=null) => new blocks['AddBlock']({
        styles: {
            display: display,
            margin: display == 'inline-block' ? '0 10px' : null,
            width: display == 'inline-block' ? '30px' : null,
            height: display == 'inline-block' ? '20px' : null
        }
    })
}

export var blocks = {
    TextBlock,
    BoxBlock,
    AddBlock
}


export var presentBlocks = {
    'navbar': baseModel.navbar(),
    'h1': baseModel.h1(),
    'link': baseModel.link('link', '#')
}