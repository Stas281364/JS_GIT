function task2() {
    mymas = [-3,4,5,-3,2,10,8-2];

    let out = mymas.reduce(
        function(accumulator, currentvalue) {
            if (currentvalue > 0 && currentvalue < 10) {
                accumulator += currentvalue;
            }

            return accumulator;
        },0)

    alert(out);
}
