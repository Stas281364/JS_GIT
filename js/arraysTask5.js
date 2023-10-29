// Написать функцию, которая принимает массив чисел и возвращает среднее арифметическое, (округлить результат до десятых).

function task5(mas) {
    let newMas = new Array();
    let result = 0;

    // let out = mas.reduce(
    //     function(accumulator, currentvalue) {
    //         accumulator += currentvalue
            
    //         return (Number(accumulator) / Number(mas.length));
    //     },0)

    for (let index = 0; index < mas.length; index++) {
        result += (mas[index]);
        
    }

    return result/ mas.length;
}