import "./styles.css";

const intialPrice = document.querySelector("#stock-price");
const stockQuantity = document.querySelector("#quantity-stock");
const currentPrice = document.querySelector("#current-price");
const resultBtn = document.querySelector("#result-btn");
const output = document.querySelector("#result");

function calculateProfitAndLoss(intialPrice, stockQuantity, currentPrice) {
  if (currentPrice > intialPrice) {
    //profit
    var profit = (currentPrice - intialPrice) * stockQuantity;
    var profitPercentage = (profit / intialPrice) * 100;
    output.innerText =
      "hey the profit is " +
      profit +
      " and the percentage is " +
      profitPercentage +
      " %";
  } else if (currentPrice < intialPrice) {
    var loss = intialPrice - currentPrice;
    var lossPercentage = (loss / intialPrice) * 100;
    output.innerText =
      "hey the loss is " +
      loss +
      " and the percentage is " +
      lossPercentage +
      " %";
  } else {
    output.innerText = "No pain No gain, and no gain no pain :)";
  }
}

function btnHandler() {
  var ip = Number(intialPrice.value);
  var sq = Number(stockQuantity.value);
  var curr = Number(currentPrice.value);
  calculateProfitAndLoss(ip, sq, curr);
  // output.innerText = "clicked";
}

resultBtn.addEventListener("click", btnHandler);
