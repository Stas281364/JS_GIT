// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://. (filter,startsWith)

function task9(mas) {
    let newmas = new Array();
    let re = "/^ http:// /"
    var regexConstructor = new RegExp("^https://.");

    // newmas.push(mas.every(function(elem) {
        
    //     if (regexConstructor.test(elem)) {
    //         return elem;
    //     }

    // }))

    for (let i = 0; i < mas.length; i++) {
        if (regexConstructor.test(mas[i])) {
            newmas.push(mas[i]);
        }
        
    }

    return newmas;
}