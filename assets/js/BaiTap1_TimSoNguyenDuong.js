// Tìm số n để 1 + 2 + ... n > 10000

// Viết hàm tìm số đó
const intNumber = () => {
  let count = 1;
  let total = 0;

  // total < 10000 vì mỗi lần lặp nó sẽ + thêm count nên sẽ tới giá trị cụ thể sẽ lớn hơn 10000
  while (total < 10000) {
    total += count;
    count++;
  }

  return `Số nguyên dương nhỏ nhất để tổng từ 1 -> n > 10000 là: ${count}`;
};
console.log(intNumber());
