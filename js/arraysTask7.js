// Дан некоторый массив. Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях. Считайте что первая позиция четная (номер индекса 0), массив должен заполняться случайными числами и содержать четное число элементов. (reduce(sum,elem,index)...)

function task7(mas) {
    
    let result;
    let chisl = 0;
    let znam = 0;
    result = mas.reduce(function(accumulator, currentvalue, currentindex) {
        
        if (currentindex % 2 == 0) {
            chisl += Number(currentvalue);
        }
        else{
            znam += Number(currentvalue);
        }

        accumulator = chisl/znam;
        return accumulator
    },0);

    return result;
}