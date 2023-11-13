

function task10(data) {

    let mas1 = new Array();
    let mas2 = new Array();

    for (let i = 0; i < data.length; i++) {
        //mas1.push(data[0].keys());
        mas1.push(Object.keys(data[0]));
        mas2.push(Object.values(data[i]));
    }
    
    //let result = mas2.reduce((value, currentValue) => value=+currentValue, 0);
    let result =0;
    for (let i = 0; i < mas2.length; i++) {
        
        for (let j = 0; j < mas2[i].length; j++) {
            
            result += mas2[i][j];
        }
        
    }

    return result;
}