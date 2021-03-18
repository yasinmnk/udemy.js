var x = 0;

while (x < 62) {
  console.log(x);

  x++;

  if (x == 63) {
    break;
  }
}

var num = 0;
num++;
while (num <= 20) {
  num++;

  if (num % 2 == 0) {
    continue;
  }
  console.log(num);
}
