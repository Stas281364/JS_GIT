

export let watch = [

        {
            name:  "CARRERA",
            imgSrc: "./img/img1.webp",
            corpus: "silver",
            belt:   "silver",
            displaySize:"3\"",
            diplayType: "standart",
            bluetooth: false,
            OS:{
                os0: false,
                os1: "Android 5",
                os2: "iOS 8"
            }

        },

        {
            name:  "MIN GREY",
            imgSrc: "./img/img2.jpg",
            corpus: "grey",
            belt:   "grey",
            displaySize:"3\"",
            diplayType: "standart",
            bluetooth: false,
            OS:{
                os0: false,
                os1: "Android 5",
                os2: "iOS 8"
            }
        },

        {
            name:  "SIPLE-SIPLE",
            imgSrc: "./img/img3.jpg",
            corpus: "white",
            belt:   "orange",
            displaySize:"3\"",
            displayType: "standart",
            bluetooth: false,
            OS:{
                os0: false,
                os1: "Android 5",
                os2: "iOS 8"
            }
        }
            
        ]
        
        let elem = document.getElementById("img1");
        elem.setAttribute("src", watch[0].imgSrc.toString());
        elem = document.getElementById("img2");
        elem.setAttribute("src", watch[1].imgSrc.toString());
        elem = document.getElementById("img3");
        elem.setAttribute("src", watch[2].imgSrc.toString());

        for (let i = 0; i < watch.length; i++) {
           
            document.getElementById(`${i}-about-name`).innerHTML = watch[i].name;

            // elem = document.getElementById(`${i}-about-imgSrc`);
            // elem.setAttribute("src", watch[i].imgSrc.toString());

            document.getElementById(`${i}-about-corpus`).innerHTML = "Корпус:" + watch[i].corpus;
            
            document.getElementById(`${i}-about-belt`).innerHTML = "Ремень:" + watch[i].belt;

            document.getElementById(`${i}-about-displaySize`).innerHTML = "Размер дисплея:" + watch[i].displaySize;

            document.getElementById(`${i}-about-displayType`).innerHTML = "Тип дисплея:" + watch[i].displayType;

            let bluetoothString = watch[i].bluetooth == true ? "Есть" : "Отсутствует";
            document.getElementById(`${i}-about-bluetooth`).innerHTML = `Bluetooth: ` + bluetoothString;
            
            document.getElementById(`${i}-about-OS`).innerHTML = "OS:" + watch[i].OS.os0;
}
