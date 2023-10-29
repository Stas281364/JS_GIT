/*Написать функцию, которая принимает массив любых целых чисел и возвращает истину, если все элементы четные. Если имеется хотя бы один элемент не четный, то false.*/ 

function task3(mas) {

    // mas.forEach(element =>{
    //     console.log(element);
    //     if (element % 2 != 0) {
    //         return Number(0);
    //     } 
    // });

    for (let index = 0; index < mas.length; index++) {
        if (mas[index] % 2 != 0) {
            return 0;
        }
        
    }

    
}