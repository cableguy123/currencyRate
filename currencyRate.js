let currencyRatio = {
  VND :  {
    USD: 0.000043,
    KRW: 0.051,
    VND: 1,
    unit: "동",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png",
  },
  USD : {
    USD: 1,
    KRW: 1182.35,
    VND: 23235.5,
    unit: "달러",
    img: "https://cdn-icons-png.flaticon.com/512/555/555526.png",

  },
  KRW : {
   USD: 0.00085,
    KRW: 1,
    VND: 19.47,
    unit: "원",
    img: "https://cdn.countryflags.com/thumbs/south-korea/flag-400.png",
  },
};

// 버튼에 클릭 기능
let fromButton = document.querySelector("#from-button");
let toButton = document.querySelector("#to-button");
let fromCurrency = "USD";
let toCurrency = "USD";

document.querySelectorAll("#from-currency-list li").forEach(function(item) {
item.addEventListener('click',function() {
  fromCurrency = this.id;
  fromButton.innerHTML = `<img class="flag-img" src="${currencyRatio[fromCurrency].img}"/>${fromCurrency}`;
  
})
});