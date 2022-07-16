// b1: Nhập dữ liệu 
newFunction();


function newFunction() {
    let r = prompt("Mời bạn nhập bán kính");
    r = Number(r);
    const PI = 3.14;
    // b2: Tính toán chu vi và diện tích
    let p = 2 * PI * r;
    let s = PI * s * r;
    // b3: Hiển thị kết quả
    document.write("Chu vi là " + p.toLocaleString(loacales, 'enIN'));
    document.write("<br>");
}
    // function demoPrompt() {
    //     // prompt: các giá trị nhập trong prompt đều là giá trị có kiểu string
    //     // let value = parseInt(prompt("Nhập gì đó vào đây đi..."))
    //     // let value1 = parseInt(prompt("Nhập gì đó vào đây đi..."))
    //     // let value = +prompt("Nhập gì đó vào đây đi...")
    //     // let value1 = +prompt("Nhập gì đó vào đây đi...")
    //     // document.write(value + "<br>")
    //     // document.write(value1 + "<br>")
    //     // document.write(value + value1)

    //     //nhập sử dụng getElementById()
    //     let name = document.getElementById("name").value
    //     document.write(name)
    //     // alert(name)
    //     // console.log(name);
    //     // document.getElementById("result").innerText = "<b>" + name + "</b>"
    //     // document.getElementById("result1").innerHTML = "<b>" + name + "</b>"
    // }