// correct solution upto 3999

function convertToRoman(num) {
  if (isNaN(num) || typeof num !== "number") return NaN;

  // can be easily upgrade by key value pair of roman and numeral in below object

  const romanArabic = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  const romannum = Object.keys(romanArabic); //array of roman
  const arabicnum = Object.values(romanArabic); //array of arabicnumber
  let targetromannum;
  let allSmallArabic = [];
  let lstArabicNum;
  let outputroman = ""; // variable for conerted roman
  // console.log(romannum)
  // console.log(arabicnum)

  for (let i = 0; i < arabicnum.length; i++) {
    // will return exact matches from the object
    if (arabicnum[i] === num) {
      return romannum[i];
    }
    // will store all small arabic number than desired arabic number from romanArabic object
    if (arabicnum[i] < num) {
      allSmallArabic.push(arabicnum[i]);
    }
  }

  //   storing last arabicnum
  lstArabicNum = allSmallArabic[allSmallArabic.length - 1];

  // storing coressponding romannumeral
  targetromannum = romannum[allSmallArabic.length - 1];
  // console.log(targetromannum)
  // console.log(lstArabicNum)

  let x = Math.floor(num / lstArabicNum); //will store a number form how many time is should be added to desired outputroman
  // console.log(x)
  for (let j = 1; j <= x; j++) {
    outputroman = outputroman + targetromannum;
  }
  console.log(outputroman);

  // if reminder 0 return outputroman
  if (num % lstArabicNum === 0) {
    return outputroman;
  } else if (num % lstArabicNum > 0) {
    return outputroman + convertToRoman(num % lstArabicNum); // if  reminder is not zero then make recursin call on that reminder
  }
}
console.log(convertToRoman("5"));
// console.log(convertToRoman(36));
// console.log(convertToRoman(5));
// console.log(convertToRoman(10))
