
function task2(mas_orders) {
        
    let start_text = "Заказ покупателя ";
    
    mas_orders.forEach(element => {
        
        
        let out_Text = start_text;

        out_Text += element.fio;
        out_Text += " ";

        out_Text += "Составил ";

        out_Text += element.price;
        out_Text += " ";
        
        out_Text += "Размер скидки составил "

        out_Text += parseInt(Math.random() * 100);
        out_Text += " %"
        
        console.log(out_Text);
    });

    return 0;
}