import Site from './Site.js'
import Panel from './Panel.js'

export default class App {
    constructor(selector) {
        this.$app = document.querySelector(selector) 
        this.selector = selector
        // this.$app.style.display = 'flex'
        // this.$app.innerHTML += `
        //     <div id='panel' style='min-width: 250px; width: 250px; background: #efefef; box-sizing: border-box;'></div>
        //     <div id='site' style='width: 100%; padding: 20px'></div>
        // `
        this.site = new Site('#site', this)
        this.panel = new Panel('#panel', this)
    }

    init(model, block) {
        this.initSite(model)
        this.initPanel(block)
    }
    initSite(model) {
        this.site.init(model)
    }
    initPanel(block) {
        this.panel.init(block)
    }
}