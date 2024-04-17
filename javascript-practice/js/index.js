// console.log("Hello World!!12222");

// let str = "Hello"; // 文字列型
// let num = 42; // 数値型
// let bool = true; // 真偽値型
// let nul = null; // null型
// let undef; // undefined型

// console.log(str); // "Hello"
// console.log(num); // 42
// console.log(bool); // true
// console.log(nul); // null
// console.log(undef); // undefined

// let obj = { name: "Alice", age: 30 }; // オブジェクト型
// let arr = [1, 2, 3]; // 配列型

// console.log(obj); // { name: "Alice", age: 30 }
// console.log(arr); // [1, 2, 3]

// let a = 5;
// let b = 2;
// let sum = a + b; // 加算演算子
// let diff = a - b; // 減算演算子
// let prod = a * b; // 乗算演算子
// let quot = a / b; // 除算演算子
// let remainder = a % b; // 剰余演算子

// console.log(sum); // 7
// console.log(diff); // 3
// console.log(prod); // 10
// console.log(quot); // 2.5
// console.log(remainder); // 1

// let count = 0; // インクリメント演算子
// count++;
// count++;
// count++;
// console.log(count); // 3

// let age = 20;
// let message = age >= 18 ? "成人です" : "未成年です"; // 三項演算子の使用例
// let isAdult = age >= 18 && true; // 短絡評価による条件分岐の使用例

// console.log(message); // "成人です"
// console.log(isAdult); // true

// let strNum = "42";
// let intNum = parseInt(strNum); // 文字列から数値への明示的な変換
// let floatNum = parseFloat("3.14"); // 文字列から浮動小数点数への明示的な変換
// let boolVal = Boolean(2); // 数値から真偽値への暗黙的な変換
// let strBool = String(true); // 真偽値から文字列への明示的な変換

// console.log(intNum); // 42
// console.log(floatNum); // 3.14
// console.log(boolVal); // false
// console.log(strBool); // "true"

// let x = 5; // letを使った再代入可能な変数宣言
// const PI = 3.14; // constを使った再代入不可能な定数宣言
// console.log(x);
// x = 10; // xの値を変更できる
// console.log(x); // 10

// // PI = 3.14159; // constで宣言された定数の値を変更しようとするとエラーが発生する

// const person = { name: "Alice", age: 30 }; // constでオブジェクトを宣言
// console.log(person.name);
// console.log(person.age);
// person.age = 31; // オブジェクトのプロパティは変更可能
// console.log(person); // { name: "Alice", age: 31 }

// // person = { name: "Alice", age: 32 };

// const numbers = [1, 2, 3]; // constで配列を宣言
// numbers.push(4); // 配列の要素は変更可能
// console.log(numbers); // [1, 2, 3, 4]

// // numbers = [1, 2, 3, 4, 5];

let age = 17;
if (age < 18) {
  console.log("未成年です");
} else {
  console.log("成人です");
}

let day = "火曜日";
switch (day) {
  case "月曜日":
    console.log("月曜日です");
    break;
  case "火曜日":
    console.log("火曜日です");
    break;
  case "水曜日":
    console.log("水曜日です");
    break;
  case "木曜日":
    console.log("木曜日です");
    break;
  case "金曜日":
    console.log("金曜日です");
    break;
  default:
    console.log("土日です");
}

for (let i = 0; i < 5; i++) {
  console.log("現在の値は: " + i);
}

// const fruits = ["りんご", "バナナ", "オレンジ"];
// for (let fruit of fruits) {
//   console.log("フルーツ: " + fruit);
// }

const person = {
  name: "太郎",
  age: 25,
  city: "東京",
};
for (let key in person) {
  console.log(key + ": " + person[key]);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " は偶数です");
  }
}

// const numbers = [10, 20, 30, 40, 50];

// console.log("配列の要素数: " + numbers.length);

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 30) {
//     console.log("要素番号 " + i + ": " + numbers[i] + " (30より大きい)");
//   } else {
//     console.log("要素番号 " + i + ": " + numbers[i] + " (30以下)");
//   }
// }

const fruits = [
  "りんご",
  "バナナ",
  "オレンジ",
  "パイナップル",
  "りんごジュース",
];

for (let fruit of fruits) {
  if (fruit.includes("りんご")) {
    console.log(fruit);
  }
}

// 配列をfor文でループして特定の範囲の条件の場合だけ出力する
const numbers = [5, 12, 3, 8, 20, 9];

for (let num of numbers) {
  if (num >= 10 && num <= 15) {
    console.log(num);
  }
}

console.log("===========");

const people = [
  { name: "太郎", age: 25, city: "東京" },
  { name: "花子", age: 30, city: "大阪" },
  { name: "次郎", age: 17, city: "名古屋" },
];

for (let person of people) {
  if (person.age >= 18) {
    console.log(person.name + "さんは成人です");
  } else {
    console.log(person.name + "さんは未成年です");
  }
}

console.log("============================================");

const zoo = [
  [
    { species: "ライオン", habitat: "サバンナ", sound: "ガオー" },
    { species: "ゾウ", habitat: "ジャングル", sound: "パオーン" },
  ],
  [
    { species: "キリン", habitat: "草原", sound: "モーモー" },
    { species: "サル", habitat: "森林", sound: "ウキキ" },
  ],
];

for (let i = 0; i < zoo.length; i++) {
  console.log("エリア " + (i + 1) + " の動物:");
  console.log("======================");

  for (let j = 0; j < zoo[i].length; j++) {
    console.log("種類: " + zoo[i][j].species);
    console.log("生息地: " + zoo[i][j].habitat);
    console.log("鳴き声: " + zoo[i][j].sound);

    console.log("--------------------");
  }
  console.log("======================");
}
