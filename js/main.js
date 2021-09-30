import {baseModel} from './Blocks/Blocks.js'
import App from './App.js'
import Site from './Site.js'


let model = baseModel.siteWrapper([
    baseModel.navbar(),
    baseModel.addBlock()
])

let app = new App('#app')
app.init(model)