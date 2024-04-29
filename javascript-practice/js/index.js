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

// let age = 17;
// if (age < 18) {
//   console.log("未成年です");
// } else {
//   console.log("成人です");
// }

// let day = "火曜日";
// switch (day) {
//   case "月曜日":
//     console.log("月曜日です");
//     break;
//   case "火曜日":
//     console.log("火曜日です");
//     break;
//   case "水曜日":
//     console.log("水曜日です");
//     break;
//   case "木曜日":
//     console.log("木曜日です");
//     break;
//   case "金曜日":
//     console.log("金曜日です");
//     break;
//   default:
//     console.log("土日です");
// }

// for (let i = 0; i < 5; i++) {
//   console.log("現在の値は: " + i);
// }

// const fruits = ["りんご", "バナナ", "オレンジ"];
// for (let fruit of fruits) {
//   console.log("フルーツ: " + fruit);
// }

// const person = {
//   name: "太郎",
//   age: 25,
//   city: "東京",
// };
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " は偶数です");
//   }
// }

// const numbers = [10, 20, 30, 40, 50];

// console.log("配列の要素数: " + numbers.length);

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 30) {
//     console.log("要素番号 " + i + ": " + numbers[i] + " (30より大きい)");
//   } else {
//     console.log("要素番号 " + i + ": " + numbers[i] + " (30以下)");
//   }
// }

// const fruits = [
//   "りんご",
//   "バナナ",
//   "オレンジ",
//   "パイナップル",
//   "りんごジュース",
// ];

// for (let fruit of fruits) {
//   if (fruit.includes("りんご")) {
//     console.log(fruit);
//   }
// }

// 配列をfor文でループして特定の範囲の条件の場合だけ出力する
// const numbers = [5, 12, 3, 8, 20, 9];

// for (let num of numbers) {
//   if (num >= 10 && num <= 15) {
//     console.log(num);
//   }
// }

// console.log("===========");

// const people = [
//   { name: "太郎", age: 25, city: "東京" },
//   { name: "花子", age: 30, city: "大阪" },
//   { name: "次郎", age: 17, city: "名古屋" },
// ];

// for (let person of people) {
//   if (person.age >= 18) {
//     console.log(person.name + "さんは成人です");
//   } else {
//     console.log(person.name + "さんは未成年です");
//   }
// }

// console.log("============================================");

// const zoo = [
//   [
//     { species: "ライオン", habitat: "サバンナ", sound: "ガオー" },
//     { species: "ゾウ", habitat: "ジャングル", sound: "パオーン" },
//   ],
//   [
//     { species: "キリン", habitat: "草原", sound: "モーモー" },
//     { species: "サル", habitat: "森林", sound: "ウキキ" },
//   ],
// ];

// for (let i = 0; i < zoo.length; i++) {
//   console.log("エリア " + (i + 1) + " の動物:");
//   console.log("======================");

//   for (let j = 0; j < zoo[i].length; j++) {
//     console.log("種類: " + zoo[i][j].species);
//     console.log("生息地: " + zoo[i][j].habitat);
//     console.log("鳴き声: " + zoo[i][j].sound);

//     console.log("--------------------");
//   }
//   console.log("======================");
// }

// 関数の定義
// function greet() {
//   console.log("Hello, world!");
//   console.log("Hello, world!2");
// }

// 関数の呼び出し
// greet(); // 出力: Hello, world!
// greet();
// greet();
// greet();

// パラメータを持つ関数の定義
// function greet(name) {
//   console.log("Hello, " + name + "!");
// }

// 異なる引数で関数を呼び出す
// greet("Alice"); // 出力: Hello, Alice!
// greet("Bob"); // 出力: Hello, Bob!
// greet("Yamada Taro");

// 戻り値を持つ関数の定義
// function add(x, y) {
//   return x + y;
// }

// let result = add(5, 3);
// console.log(result); // 8

// let result2 = add(1000, 111);
// console.log(result2); // 1111

// function filterNamesBySubstring(names, substring) {
//   const filteredNames = [];

//   for (let i = 0; i < names.length; i++) {
//     if (names[i].includes(substring)) {
//       filteredNames.push(names[i]);
//     }
//   }

//   return filteredNames;
// }

// const namesArray = ["Alice", "Bob", "Charlie", "David", "Eve"];
// const result = filterNamesBySubstring(namesArray, "a");
// console.log(result); // 出力: ["Charlie", "David"]

// const result1 = filterNamesBySubstring(namesArray, "i");
// console.log(result1);

// const add = function (a, b) {
//   return a + b;
// };

// const subtract = function (a, b) {
//   return a - b;
// };

// const calculate = {
//   add: add,
//   subtract: subtract,
// };

// const result1 = calculate.add(10, 15);
// console.log(result1);

// const result2 = calculate.subtract(10, 15);
// console.log(result2);

// const addHundred = (a) => a + 100;

// const result = addHundred(10);
// console.log(result);

// const result2 = addHundred(100);
// console.log(result2);

// function outerFunc() {
//   let value = 1;
//   function innerFunc() {
//     // let value = 10;
//     value++;
//     console.log(value);
//   }
//   innerFunc();
// }
// outerFunc(); // 2

// function greeting(name) {
//   alert(`Hello, ${name}`);
// }

// function processUserInput(callback) {
//   const name = prompt("Please enter your name.");
//   callback(name);
// }

// processUserInput(greeting);

// const str = "123";

// console.log(str); // 出力: "123"

// console.log(parseInt(str)); // 出力: 123

// // 浮動小数点値に変換
// console.log(parseFloat("123.45")); // 出力: 123.45

// // 文字列は無視される
// console.log(parseInt("123abc")); // 出力: 123

// const count = 10;
// console.log(count.toString()); // "10"

// console.log((17).toString()); // "17"

// console.log((17.2).toString()); // "17.2"

// let greeting = " Hello World! ";

// console.log(greeting); // 出力: " Hello World! "

// console.log(greeting.trim()); // 出力: "Hello World!"

// console.log(greeting.toUpperCase()); // 出力: " HELLO WORLD! "

// console.log(greeting.includes("World")); // 出力: true

// console.log(greeting.split(" ")); //出力: (4)['', 'Hello', 'World!', '']

// let phoneNumber = "080-1122-3344";
// console.log(phoneNumber.split("-"));

// console.log(Math.round(57.712134782005423)); // 出力: 58

// console.log(Math.max(5, 10, 15)); // 出力: 15

// console.log(Math.random()); // 出力: 0.0から1.0未満のランダムな数

// let today = new Date();
// console.log(today.toString()); // 出力: 現在の日付と時刻

// console.log(today.getFullYear()); // 出力: 年を取得

// let fruits = ["Apple", "Banana"];

// console.log(fruits); // 出力: ['Apple', 'Banana']

// fruits.push("Orange"); // Orangeを追加
// console.log(fruits); // 出力: ['Apple', 'Banana', 'Orange']

// fruits.pop(); // 最後の要素Orangeを削除
// console.log(fruits); // 出力: ['Apple', 'Banana']

// numbers.forEach((number, index) => {
//   console.log(index, number);
// });

// let peaple = ["yamada", "tanaka", "akiyama", "ota"];

// peaple.forEach((person, index) => {
//   console.log(index, person);
// });

// let doubled = numbers.map((x) => x * 2); // 各要素を2倍にする
// console.log(doubled); // 出力: [2, 4, 6, 8]

// let numbers = [1, 2, 3, 4];

// let evens = numbers.filter((x) => x % 2 === 0); // 偶数だけを取得
// console.log(evens); // 出力: [2, 4]

// const filterNamesBySubstring = (names, substring) =>
//   names.filter((name) => name.includes(substring));

// const namesArray = ["Alice", "Bob", "Charlie", "David", "Eve"];
// const result = filterNamesBySubstring(namesArray, "a");
// console.log(result); // 出力: ["Charlie", "David"]

// let user = {
//   name: "Alice",
//   age: 25,
//   isAdmin: true,
// };

// // オブジェクトのすべてのキー（プロパティ名）を配列として取得します。
// console.log(Object.keys(user)); // 出力: ['name', 'age', 'isAdmin']

// // オブジェクトのすべての値を配列として取得します。
// console.log(Object.values(user)); // 出力: ['Alice', 25, true]

// // オブジェクトのキーと値のペアを配列の形で取得します。各ペアはさらに配列として格納されています。
// console.log(Object.entries(user)); // 出力: [['name', 'Alice'], ['age', 25], ['isAdmin', true]]

// 従業員データを格納したオブジェクト
// const employees = {
//   Alice: { department: "Engineering", salary: 75000 },
//   Bob: { department: "HR", salary: 45000 },
//   Carol: { department: "Marketing", salary: 55000 },
//   David: { department: "Engineering", salary: 60000 },
// };

// console.log(employees);

// const highEarningEmployees = Object.entries(employees)
//   .filter(([name, details]) => details.salary >= 50000)
//   .map(([name, details]) => ({ name: name, salary: details.salary }));

// console.log(highEarningEmployees);

// DOMが読み込まれるまで待ってから処理する時の決まり文句
//document.addEventListener("DOMContentLoaded", () => {
// IDに基づいて要素を取得する例
// const testId = document.getElementById("test-id");
// console.log(testId);
// console.log(testId.children);
// console.log(testId.children[0]);
// クラス名に基づいて要素を取得する例
// const testClassList = document.getElementsByClassName("test-class");
// console.log(testClassList);
// タグ名に基づいて要素を取得する例
// const allParagraphs = document.getElementsByTagName("p");
// console.log(allParagraphs);
// console.log(allParagraphs[1].className);
// CSSセレクタに基づいて要素を取得する例
// const firstParagraph = document.querySelector("#test-id > .test-class.hello");
// console.log(firstParagraph);
// CSSセレクタに基づいて一致するすべての要素を取得する例
// const allParagraphList = document.querySelectorAll(".test-class");
// console.log(allParagraphList[1].textContent);
//});

// document.addEventListener("DOMContentLoaded", () => {
//   // 新しい要素を作成して追加する例
//   const newParagraph = document.createElement("p");
//   newParagraph.textContent = "これは新しい段落です。";

//   // 属性を変更する例
//   newParagraph.setAttribute("class", "highlight");

//   // スタイルを変更する例
//   newParagraph.style.color = "red";

//   const myDiv = document.getElementById("my-div");
//   myDiv.appendChild(newParagraph);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const myDiv = document.getElementById("my-div");

//   // 新しい要素を作成して追加する例
//   myDiv.innerHTML =
//     '<p class="highlight" style="color: red;">これはInnerHtmlで挿入された新しい段落です。</p>';
// });

document.addEventListener("DOMContentLoaded", () => {
  // const divElem = document.getElementById("test-id");

  // const paragraphElem = document.querySelectorAll(".test-class");
  // 指定した要素の指定した子要素を削除する;
  // console.log(paragraphElem);
  // paragraphElem.forEach((elem) => {
  //   divElem.removeChild(elem);
  // });

  // const pagraphElem = document.querySelector(".test-class.hello");

  // 指定した要素自身を削除する
  // pagraphElem.remove();

  document.querySelectorAll(".test-class").forEach((elem) => elem.remove());
});
