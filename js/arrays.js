// Вычислить сумму квадратных корней для всех чётных чисел целочисленного массива.
function task1(){
    let Mymas = [4,121,36];
    //let itog = Mymas.reduce((accumulator, currentvalue) => accumulator+Math.sqrt(currentvalue));
    console.log(Mymas);
   let itog1 = Mymas.reduce(function(accumulator,currentvalue){
        if(currentvalue % 2 == 0 ) accumulator+=Math.sqrt(currentvalue);
        return accumulator;
   },0);
   
   alert(itog1);
}
