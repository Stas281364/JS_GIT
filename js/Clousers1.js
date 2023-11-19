
function CreateLink(category) {
    return function (code) {
        return `http://myshop.ru/${category}/${code}`
    }
}