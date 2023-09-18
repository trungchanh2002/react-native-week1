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


//Coding Challenge #5
//Tạo arrow function để tính trung bình
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//Tính trung bình điểm cho cả hai đội
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
//Tạo hàm để kiểm tra người chiến thắng
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins!");
    }
};
//Kiểm tra người chiến thắng cho từng data
console.log("Data 1:");
checkWinner(avgDolphins1, avgKoalas1);
console.log("Data 2:");
checkWinner(avgDolphins2, avgKoalas2);

//Coding Challenge #6
//Tạo hàm tính tip
const calcTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
//Tạo mảng bills chứa dữ liệu test
const bills = [125, 555, 44];
// Tạo mảng tips chứa giá trị tip cho mỗi hóa đơn
const tips = bills.map(bill => calcTip(bill));
// Tạo mảng total chứa tổng giá trị (hóa đơn + tip) cho mỗi hóa đơn
const totals = bills.map((bill, index) => bill + tips[index]);
// Hiển thị kết quả
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);

//Coding Challenge #7
// Tạo đối tượng cho Mark và John
const mark = {
    fullName: 'Mark Miller',
    mass: 78, // kg
    height: 1.69, // m
    calcBMI: function() {
      this.bmi = this.mass / (this.height ** 2);
      return this.bmi;
    }
  };
  const john = {
    fullName: 'John Smith',
    mass: 92, // kg
    height: 1.95, // m
    calcBMI: function() {
      this.bmi = this.mass / (this.height ** 2);
      return this.bmi;
    }
  };
  // Tính BMI
  mark.calcBMI();
  john.calcBMI();
  // So sánh BMI và hiển thị kết quả
  if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
  } else if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
  } else {
    console.log(`BMI của ${john.fullName} và ${mark.fullName} bằng nhau (${john.bmi})!`);
  }
  
//Coding Challenge #8
// Tạo mảng chứa giá trị hóa đơn
const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// Tạo các mảng rỗng cho tiền tip và tổng
const tips1 = [];
const totals1 = [];
// Định nghĩa hàm tính tiền tip
function calcTip(bill) {
  let tipPercentage;
  if (bill >= 50 && bill <= 300) {
    tipPercentage = 0.15;
  } else {
    tipPercentage = 0.2;
  }
  return bill * tipPercentage;
}
// Tính toán tiền tip và tổng, sau đó đưa vào mảng
for (let i = 0; i < bills1.length; i++) {
  const tip = calcTip(bills[i]);
  tips1.push(tip);
  totals.push(bills1[i] + tip);
}
// Tính trung bình cộng của tổng hóa đơn
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
// Tính trung bình cộng của tổng hóa đơn và in ra màn hình
const averageTotal = calcAverage(totals1);
console.log('Trung bình cộng của tổng hóa đơn là: ' + averageTotal);


// Coding Challenge #9
function printForecast(arr) {
    let forecastString = '';
    for (let i = 0; i < arr.length; i++) {
      forecastString += `. ${arr[i]}°C in ${i + 1} day${i === 0 ? '' : 's'} `;
    }
    console.log(forecastString);
  }
  const data1 = [17, 21, 23];
  const data2 = [12, 5, -5, 0, 4];
// In dự đoán cho data1 và data2
  console.log('Dự đoán data1:');
  printForecast(data1);
  console.log('\nDự đoán data2:');
  printForecast(data2);


                                                            // JavaScript in the Browser: DOM and Events

  