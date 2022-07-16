function calRate() {
    let money = +prompt("Nhập vào số tiền ban đầu: ")
    let rate = prompt("Nhập vào lãi suất hằng năm: ")
    let year = prompt("Nhập vào số năm gửi tiết kiệm: ")
    let moneyLast = money + ((money * rate/100) * year)
    document.getElementById("bai3").innerText = "Số tiền nhận được là: " + moneyLast
}