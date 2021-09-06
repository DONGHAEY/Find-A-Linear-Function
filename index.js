function ipt(array) {
  let number = [0];
  let count = 0;
  let ln = 0;
  for (let i = 0; i <= array.length; i++) {
    let o = array[i];
    if (o >= "0" && o <= "9") {
      if (count < 3) {
        if (ln === i - 1) {
          count--;
          number[count] += o;
        } else {
          if (count < 2) {
            number[count] = o;
          }
        }
      }
      count++;
      ln = i;
    } else if (o === "-") {
      number[count] = "-";
      ln = i;
      count++;
    }
  }
  console.log(number);
  return number;
}

function culculator(p1, p2) {
  p2[0] *= -1;
  p2[1] *= -1;
  let a = p1[0] + p2[0];
  let y = p1[1] + p2[1];
  a = y / a;
  let b = a * p1[0];
  b = p1[1] - b;
  return [a, b];
}

function change(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] -= "0";
  }
  console.log(array);
  return array;
}

async function printName() {
  const d1 = document.getElementById("d1").value;
  const d2 = document.getElementById("d2").value;

  let p1 = ipt(d1);
  let p2 = ipt(d2);

  p1 = change(p1);
  p2 = change(p2);

  let result = culculator(p1, p2);

  console.log(result[0], result[1]);

  let str =
    "당신이 찾으시는 그래프 식은" + "y = " + result[0] + "x + " + result[1];

  document.getElementById("result").innerText = str;
}
