/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2025;
console.log(YEAR);

console.log(typeof String(YEAR)); // 명시적 형변환
console.log(typeof (YEAR + '')); // 암시적 형변환

// undefined, null
let days = null;
console.log(days + '');

let undef;
console.log(undef + '');

// boolean
let isClicked = false;
console.log(String(isClicked));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;

console.log(Number(friend));


// null
let money = null;
console.log(money * 1);
console.log(money / 1);
console.log(+money);


// boolean
let isActive = false;
console.log(isActive * 1);


// string
let num = '100';
console.log(num * 1);


// numeric string
const width = '120.5px';

console.log(width);


console.log(parseInt(width, 10));    // , 다음에 안전하게 진수값(radix? - 옵션널)을 입력한다(기본값이 10진수가 아님!)
console.log(parseFloat(width, 10) + 10 + 'px');



/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 


console.clear();

console.log(Boolean(friend));
console.log(Boolean(money));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean('0'));
console.log(Boolean(' '));
console.log(Boolean(-1));
console.log(!!{});
console.log(!!false);
console.log(!!(()=>{}));



