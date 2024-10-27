//bài tập 1
document.querySelector("#btnInSoChan").onclick = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) document.querySelector("#result1").innerHTML += i + " ";
  }
};
document.querySelector("#btnInSoLe").onclick = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) document.querySelector("#result1").innerHTML += i + " ";
  }
};
//bài tập 2
document.querySelector("#btnTinhTongSoChan").onclick = () => {
  let number = document.querySelector("#number").value * 1;
  let tong = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      tong += i;
    }
  }
  document.querySelector(
    "#result2"
  ).innerHTML = `Tổng số chẵn từ 1 đến n là: ${tong}`;
};
//Bài tập 3
document.querySelector("#btnTimSoChiaHetChoBa").onclick = () => {
  let count = 0;
  for (let i = 0; i <= 1000; i++) {
    if (i % 3 === 0) {
      count++;
    }
  }
  document.querySelector(
    "#result3"
  ).innerHTML = `Có tất cả ${count} số có thể chia hết cho 3 từ 0 đến 1000.`;
};
//Bài tập 4
document.querySelector("#btnIn10Div").onclick = () => {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      document.querySelector(
        "#result4"
      ).innerHTML += `<div class="bg-blue-500 mt-3"> Đây là div thứ ${i}.`;
    } else {
      document.querySelector(
        "#result4"
      ).innerHTML += `<div class="bg-red-500 mt-3"> Đây là div thứ ${i}.`;
    }
  }
};
//Bài tập 5
document.querySelector("#btnTimSo").onclick = () => {
  let tong = 0;
  let count = 1;
  for (let i = count; tong < 10000; i++) {
    tong += i;
    count = i;
  }
  document.querySelector(
    "#result5"
  ).innerHTML = `Số nguyên dương nhỏ nhất sao cho: 1+2+…+ n > 10000 là ${count} với tổng là ${tong}`;
};
//Bài tập 6
document.querySelector("#btnTinhTongSn").onclick = () => {
  let x = document.querySelector("#soX").value * 1;
  let n = document.querySelector("#soN").value * 1;
  let tong = 0;
  let XmuN = 1;
  for (let i = 1; i <= n; i++) {
    XmuN *= x;
    tong += XmuN;
  }

  document.querySelector("#result6").innerHTML = `Tổng kết quả là: ${tong}`;
};
//Bài tập 7
document.querySelector("#btnTinhGiaiThua").onclick = () => {
  let number = document.querySelector("#number7").value * 1;
  let kq = 1;
  for (let i = 1; i <= number; i++) {
    kq *= i;
  }
  document.querySelector(
    "#result7"
  ).innerHTML = `Gia thừa của ${number} là ${kq}`;
};
//Bài tập 8
document.querySelector("#btnInRaSoNguyen").onclick = () => {
  let number = document.querySelector("#number8").value * 1;
  for (let i = 1; i <= number; i++) {
    document.querySelector("#result8").innerHTML += i + " ";
  }
};
