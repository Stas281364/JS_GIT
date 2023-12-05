import  watch  from "./js1";

let cards = Array.from(document.querySelector("li"));

cards.forEach(function(elem,index)
{
    document.getElementById(`${index}-about-name`).innerHTML = watch[index].name;

    document.getElementById(`${index}-about-corpus`).innerHTML = "Корпус:" + watch[index].corpus;
    
    document.getElementById(`${index}-about-belt`).innerHTML = "Ремень:" + watch[index].belt;

    document.getElementById(`${index}-about-displaySize`).innerHTML = "Размер дисплея:" + watch[index].displaySize;

    document.getElementById(`${index}-about-displayType`).innerHTML = "Тип дисплея:" + watch[index].displayType;

    let bluetoothString = watch[index].bluetooth == true ? "Есть" : "Отсутствует";
    document.getElementById(`${index}-about-bluetooth`).innerHTML = `Bluetooth: ` + bluetoothString;
    
    document.getElementById(`${index}-about-OS`).innerHTML = "OS:" + watch[index].OS.os0;
}
)