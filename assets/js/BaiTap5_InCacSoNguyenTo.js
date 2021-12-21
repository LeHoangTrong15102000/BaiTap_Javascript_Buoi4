// Xác định số nguyến tố từ 1 đến số nhập vào

document.querySelector('#btnInSoNguyenTo').onclick = () => {
  const soNhapN = Number(document.querySelector('#giaTriN').value);

  let result = '';

  // lập từ 0 tới số N
  for (let i = 0; i <= soNhapN; i++) {
    // Nếu phần tử thứ i thỏa mãn điều kiện là snt thì in ra
    if (check_snt(i)) {
      result += i + ' ';
    }
  }
  document.querySelector('#hienThiKetQua').textContent = result;
};

// Hàm kiểm tra số nguyên tố
const check_snt = (number) => {
  // Sử dụng kỹ thuật cờ hiệu
  let flag = true;

  // 1 và 0 không phải là số nguyên tố
  if (number < 2) {
    flag = false;
  }
  // 2 là số nguyên tố
  else if (number === 2) {
    flag = true;
  } else if (number % 2 === 0) {
    flag = false;
  }
  // Ngược lại là tất cả các số từ 3 trở đi
  else {
    // Với bước nhảy là 2 đơn vị
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        flag = false;
        break;
      }
    }
  }
  return flag;
  // Kiểm tra xem các số nhập vào có phải là số nguyến tố hay không
};

// Hàm in ra số nguyên tố từ 1 tới N
