function getDay() {
    // b1: Lấy Dữ Liệu
    let day = document.getElementById("day").value
    let month = document.getElementById("month").value
    let year = document.getElementById("year").value
    // b2: Thực hiện tính toán
    let result = day + "-" + month + "-" + year
    // b3: hiển thị kết quả
    document.getElementById(getElementById:"result1").innerText = result
}