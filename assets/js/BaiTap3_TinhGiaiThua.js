// Tính giai thừa

document.querySelector('#btnTinhGiaiThua').onclick = () => {
  const soNhap = Number(document.querySelector('#soN').value);

  document.querySelector('#ketQuaGiaiThua').textContent = giaithuaFunc(soNhap);
};

const giaithuaFunc = (number) => {
  let result = 1; // biến hứng kết quả

  if (number === 1 || number === 0) return 1;

  if (number > 1) {
    for (let index = 1; index <= number; index++) {
      result = result * index;
    }
  }

  return result;
};
