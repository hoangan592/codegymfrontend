function convert() {
    let amount = document.getElementById("form").Value;
    // Tính tỉ lệ 
    let form = +document.getElementById("form").value;
    let to = +document.getElementById("form").value;
    let rate = form/to; 
    // Tính kết quả 
    let result = amount*rate
    // In kết quả
    document.getElementById("result"). result;

}