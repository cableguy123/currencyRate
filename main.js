let currencyItem = {
  USD : {
    KRW:1184.36, 
    USD:1, // 미국돈 1달러 
    VND:22972.50,
    unit : "달러"
    

  },
  KRW : {
    KRW:1,
    USD:0.00084,
    VND:19.40,
    unit : "원"

  },
  VND : {
    KRW:0.052,
    USD:0.000044,
    VND:1,
    unit: "동"

  }

};
// 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용된다
// 숫자를 한국어로 읽기
let currencyUnit = [" ","만","억","조","경"];
let splitUnit = 10000;
// 값 변수에 저장
let currencyRate1 = "USD"; // 얘네들이 KRW,USD,VND으로 바뀜
let toCurrencyRate2 = "USD";
document.querySelectorAll("#currencyContent a").forEach(item => {
item.addEventListener('click',function() {
document.querySelector("#currencyDate").textContent = this.textContent;
// USD == USD,KRW,VND
// document.querySelector("#currencyDate").textContent == USD
// 이벤트핸들러안 this는 ? 이벤트를받는 html 요소 = item =USD,KRW,VND
currencyRate1 = this.textContent; // 얘떄문임 이 this는 item 즉 = USD,KRW,VND임

convert('from');
});
});




document.querySelectorAll("#to-currencyContent2 a").forEach(item => { 
item.addEventListener('click',function() {
   document.querySelector('#to-currencyDate2').textContent = this.textContent;
   toCurrencyRate2 = this.textContent;
   convert('from');
});
});
function convert(type) {
  let count = 0;
  if(type == 'from') {
    count = document.querySelector("#inputNum").value;
    // 환전 시작!
    let countNum = count * currencyItem[currencyRate1][toCurrencyRate2];
    // 환전 값 보여주기
     document.querySelector("#inputNum2").value = countNum;
    readKorean(count,countNum);


    
  }
  else {
    //역 환전 
    count = document.querySelector("#inputNum2").value;
    let countNum = count * currencyItem[toCurrencyRate2][currencyRate1];
     document.querySelector("#inputNum").value = countNum;
    readKorean(countNum,count);
  }
}

function readKorean(from,to)  {
  document.querySelector("#fromNumToKorea").textContent =
  readKoreanNum(from) + currencyItem[currencyRate1].unit;
  document.querySelector("#toNumToKorea").textContent =
  readKoreanNum(to) + currencyItem[toCurrencyRate2].unit;
  // ~원 ~ 달러 ~ 동
}
// let currencyUnit = [" ","만","억","조","경"];
// let splitUnit = 10000; 
//
function readKoreanNum(num) { 
  let resultArray = [];
  let resultString = "";
  for(let i=0; i<currencyUnit.length; i++)  {
   let resultUnit =
    (num %  Math.pow(splitUnit,i+1)) / Math.pow(splitUnit,i);
    resultUnit = Math.floor(resultUnit); // 0이상 1미만 
  if(resultUnit > 0) {
    resultArray[i] = resultUnit; // resultArray[0] = 0
    // resultArray[1] = 0 
  }
}
 // resultString 처리
 for(let i=0; i<resultArray.length; i++) { 
   if(!resultArray[i]) continue;
   resultString = String(resultArray[i]) + currencyUnit[i] + resultString;
 }
 return resultString;
   
   // resultArray[i]가 아니라면 resultArray[i] 건너뛰고 실행
   // continue : 조건이 true면 continue 실행 
   // ex if(i==5) continue 5를 건너뛰고 6으로 넘어가 끝까지 실햇ㅇ
 }

