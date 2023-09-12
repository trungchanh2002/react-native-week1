//Coding Challenge #1

var markWeight = 78; // Khối lượng của Mark (kg)
var markHeight = 1.69; // Chiều cao của Mark (m)
var johnWeight = 92; // Khối lượng của John (kg)
var johnHeight = 1.95; // Chiều cao của John (m)

var markBMI = markWeight / (markHeight * markHeight);
var johnBMI = johnWeight / (johnHeight * johnHeight);

console.log("Chỉ số BMI của Mark: " + markBMI);
console.log("Chỉ số BMI của John: " + johnBMI);
//3 So sánh chỉ số BMI của Mark và John
var markHigherBMI = markBMI > johnBMI;
console.log("Mark có  BMI cao hơn John: " + markHigherBMI);

//Coding Challenge #2
// In kết quả
if (markHigherBMI) {
    console.log(`Mark BMI (${markBMI}) cao hơn John (${johnBMI})`);
} else {
    console.log(`John BMI (${johnBMI}) cao hơn Mark (${markBMI})`);
}

//Coding Challenge #3
// Data
const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];
// Tính điểm trung bình cho mỗi đội
const calculateAverage = (scores) => {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
};

const dolphinsAverage = calculateAverage(dolphinsScores);
const koalasAverage = calculateAverage(koalasScores);
// Kiểm tra điểm trung bình để xác định người chiến thắng hoặc sự hòa
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log("Đội Dolphins chiến thắng!");
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log("Đội Koalas chiến thắng!");
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log("Trận đấu kết thúc với tỷ số hòa!");
} else {
    console.log("Không có đội nào chiến thắng!");
}

//Coding Challenge #4
// Data
const billValues = [275, 40, 430];
// Tính toán tiền tip sử dụng ternary operator
const tip = billValues.map((bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2);
// In thông tin ra console
billValues.forEach((bill, index) => {
    const tipAmount = tip[index];
    const totalValue = bill + tipAmount;
    console.log('----------------------');
    console.log(`Hóa đơn là ${bill}`);
    console.log(`số tiền tip là ${tipAmount}`);
    console.log(`Tổng số tiền là ${totalValue}`);

});