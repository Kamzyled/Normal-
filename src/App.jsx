import React, { useState, useEffect } from "react";

// ✅ 50 Functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b === 0 ? "Error" : a / b; }
function isEven(n) { return n % 2 === 0; }
function isOdd(n) { return n % 2 !== 0; }
function square(n) { return n * n; }
function cube(n) { return n * n * n; }
function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }
function fibonacci(n) { return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2); }

function reverseString(str) { return str.split("").reverse().join(""); }
function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }
function isPalindrome(str) { return str === reverseString(str); }
function findMax(arr) { return Math.max(...arr); }
function findMin(arr) { return Math.min(...arr); }

function sumArray(arr) { return arr.reduce((a, b) => a + b, 0); }
function avgArray(arr) { return sumArray(arr) / arr.length; }
function uniqueArray(arr) { return [...new Set(arr)]; }
function countVowels(str) { return str.match(/[aeiou]/gi)?.length || 0; }
function countConsonants(str) { return str.match(/[^aeiou\s\d\W]/gi)?.length || 0; }

function randomNum(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function isPrime(n) { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; }
function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
function lcm(a, b) { return (a * b) / gcd(a, b); }
function toBinary(n) { return n.toString(2); }

function toHex(n) { return n.toString(16); }
function toOctal(n) { return n.toString(8); }
function charCount(str, ch) { return str.split(ch).length - 1; }
function repeatString(str, n) { return str.repeat(n); }
function truncate(str, n) { return str.length > n ? str.slice(0, n) + "..." : str; }

function sortAsc(arr) { return [...arr].sort((a, b) => a - b); }
function sortDesc(arr) { return [...arr].sort((a, b) => b - a); }
function mergeArrays(a, b) { return [...a, ...b]; }
function intersection(a, b) { return a.filter((x) => b.includes(x)); }
function difference(a, b) { return a.filter((x) => !b.includes(x)); }

function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }
function countWords(str) { return str.trim().split(/\s+/).length; }
function removeSpaces(str) { return str.replace(/\s+/g, ""); }
function swap(a, b) { return [b, a]; }
function getDay() { return new Date().toLocaleDateString("en-US", { weekday: "long" }); }

function getTime() { return new Date().toLocaleTimeString(); }
function randomColor() { return "#" + Math.floor(Math.random() * 16777215).toString(16); }
function isUpperCase(str) { return str === str.toUpperCase(); }
function isLowerCase(str) { return str === str.toLowerCase(); }
function toggleCase(str) { return str.split("").map(ch => ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()).join(""); }

function reverseWords(str) { return str.split(" ").reverse().join(" "); }
function removeDuplicates(str) { return [...new Set(str)].join(""); }
function range(n) { return [...Array(n).keys()]; }
function pow(a, b) { return a ** b; }
function absVal(n) { return Math.abs(n); }

// ✅ Test outputs
const tests = [
  ["add(5,3)", add(5,3)],
  ["subtract(10,4)", subtract(10,4)],
  ["multiply(6,7)", multiply(6,7)],
  ["divide(20,5)", divide(20,5)],
  ["isEven(10)", isEven(10)],
  ["isOdd(9)", isOdd(9)],
  ["square(8)", square(8)],
  ["cube(3)", cube(3)],
  ["factorial(5)", factorial(5)],
  ["fibonacci(7)", fibonacci(7)],
  ["reverseString('kamzy')", reverseString("kamzy")],
  ["capitalize('hello')", capitalize("hello")],
  ["isPalindrome('level')", isPalindrome("level")],
  ["findMax([4,9,1])", findMax([4,9,1])],
  ["findMin([4,9,1])", findMin([4,9,1])],
  ["sumArray([1,2,3])", sumArray([1,2,3])],
  ["avgArray([2,4,6])", avgArray([2,4,6])],
  ["uniqueArray([1,1,2,3])", uniqueArray([1,1,2,3])],
  ["countVowels('kamzy')", countVowels("kamzy")],
  ["countConsonants('kamzy')", countConsonants("kamzy")],
  ["randomNum(1,10)", randomNum(1,10)],
  ["isPrime(29)", isPrime(29)],
  ["gcd(48,18)", gcd(48,18)],
  ["lcm(4,6)", lcm(4,6)],
  ["toBinary(10)", toBinary(10)],
  ["toHex(255)", toHex(255)],
  ["toOctal(10)", toOctal(10)],
  ["charCount('banana','a')", charCount("banana","a")],
  ["repeatString('ha',3)", repeatString("ha",3)],
  ["truncate('kamzy loves code',10)", truncate("kamzy loves code",10)],
  ["sortAsc([3,1,2])", sortAsc([3,1,2])],
  ["sortDesc([3,1,2])", sortDesc([3,1,2])],
  ["mergeArrays([1,2],[3,4])", mergeArrays([1,2],[3,4])],
  ["intersection([1,2,3],[2,3,4])", intersection([1,2,3],[2,3,4])],
  ["difference([1,2,3],[2,3,4])", difference([1,2,3],[2,3,4])],
  ["shuffle([1,2,3,4])", shuffle([1,2,3,4])],
  ["countWords('hello world')", countWords("hello world")],
  ["removeSpaces('h e l l o')", removeSpaces("h e l l o")],
  ["swap(1,2)", swap(1,2)],
  ["getDay()", getDay()],
  ["getTime()", getTime()],
  ["randomColor()", randomColor()],
  ["isUpperCase('HELLO')", isUpperCase("HELLO")],
  ["isLowerCase('hello')", isLowerCase("hello")],
  ["toggleCase('KaMzY')", toggleCase("KaMzY")],
  ["reverseWords('I love Kamzy')", reverseWords("I love Kamzy")],
  ["removeDuplicates('aabbcc')", removeDuplicates("aabbcc")],
  ["range(5)", range(5)],
  ["pow(2,10)", pow(2,10)],
  ["absVal(-42)", absVal(-42)]
];

export default function App() {
  const [bgColor, setBgColor] = useState(randomColor());

  // Change background every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor(randomColor());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      padding: "20px",
      fontFamily: "monospace",
      minHeight: "100vh",
      background: bgColor,
      color: "white",
      transition: "background 1s ease"
    }}>
      <h1>⚡ 50 Functions Challenge ⚡</h1>
      <ul>
        {tests.map(([name, result], idx) => (
          <li key={idx}>
            <strong>{name}</strong> ➝ {JSON.stringify(result)}
          </li>
        ))}
      </ul>
    </div>
  );
}
