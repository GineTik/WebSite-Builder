import Site from './Site.js'
import Panel from './Panel.js'

export default class App {
    constructor(selector) {
        this.$app = document.querySelector(selector) 
        this.selector = selector

        this.$app.style.display = 'flex'
        this.$app.innerHTML += `
            <div id='panel' style='width: 250px; background: #efefef'></div>
            <div id='site' style='width: 100%; padding: 20px'></div>
        `
        this.site = new Site('#site', this)
        this.panel = new Panel('#panel')
    }

    init(model) {
        this.site.init(model)
        this.panel.init(model)
    }
}