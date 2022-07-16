function calCircle() {
    let r = prompt("Nhập vào bán kính hình tròn: ")
    //**: toán tử mũ, trước ** là cơ số, sau ** là số mũ
    let area = r ** 2 * Math.PI
    let peri = r * 2 * Math.PI
    //tính mũ bằng thư viện Math: Math.pow()
    // let area = Math.pow(r, 2) * Math.PI
    //toFixed(): làm tròn, lấy đến bao nhiêu số thập phân sau dấu phẩy
    document.getElementById("bai2").innerHTML = "Diện tích là: " + area.toFixed(3) + "<br>Chu vi là: " + peri.toFixed(2)
}