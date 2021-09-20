export default class panel {
    constructor(selector) {
        this.$body = document.querySelector(selector)
    }

    init(block) {
        this.$body.append('start')
    }
}