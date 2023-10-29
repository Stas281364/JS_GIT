// Написать функцию, которая принимает массив любых целых чисел, и возвращает новый массив из элементов переданного массива, кратных пяти. ([1,2,5,12,15,21] вернет [5,15])

function task4(mas) {
    let newMas = new Array();

    // newMas.from(mas, (x) => function(x) {
    //     if (x % 5 == 0) {
    //         return x;
    //     }
    // })

    for (let index = 0; index < mas.length; index++) {
        if (mas[index] % 5 == 0) {
            newMas.push(mas[index]);
        }
        
    }

    return newMas;
}