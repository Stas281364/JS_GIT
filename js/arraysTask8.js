// Запросите у пользователя число и сформируйте на его основе другое число, каждая цифра которого больше на единицу. Если попалась цифра 9 она также заменяется на 10. (toString(),split(“”),map)

function task8(nubmer) {
    let mas = new Array();
    let result_mas = new Array();
    let str = nubmer.toString();
    mas = str.split("");
    result_mas = mas.map((elem) => parseInt(elem) + 1);

    let result_string = new String;
    result_mas.forEach(element => {
        result_string += element;
    });
    return result_string;
    
}