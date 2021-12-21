// Nhập vào 2 số x và n tính tổng S(n) = x^1 + x^2 + x^3 + ... + x^n

document.querySelector('#btnTinhTong').onclick = () => {
  // lấy giá trị 2 số đầu vào x và n
  const nhapSoX = Number(document.querySelector('#nhapSoX').value);
  const nhapSoN = Number(document.querySelector('#nhapSoN').value);

  document.querySelector('#ketQuaTinhTong').textContent = totalFunc(
    nhapSoX,
    nhapSoN
  );
};

const totalFunc = (soX, soN) => {
  let total = 0;
  // tạo một biến hứng giá trị mỗi lần lặp
  let lt = 1; //số mỗi lần lũy thừa

  for (let i = 1; i <= soN; i++) {
    lt *= soX;
    total += lt;
  }

  return total;
};
