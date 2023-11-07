// Написать функцию, которая принимает массив чисел и переносит первый элемент массива в конец. (push,shift)

function task6(mas) {
    let newmas = new Array();
    let buffer= mas.shift();
    newmas.push(mas);
    newmas.push(buffer);

    return newmas;
}