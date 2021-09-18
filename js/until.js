export function NullOrEmptyOf(elem) {
    if (elem == null || elem == {} || elem == '') {
        return true
    }
    return false
}