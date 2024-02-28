function CalculateLoan() {
  const loanAmount = parseFloat(
    document.getElementById("loanAmountInput").value
  );
  const annualInterestRate = parseFloat(
    document.getElementById("interestRateInput").value
  );
  const loanTermYears = parseFloat(document.getElementById("loanTermInput"));

  if (isNaN(loanAmount) || isNaN(annualInterestRate) || isNaN(loanTermYears)) {
    alert("Please enter valid values for the fields");
    return;
  }

  const monthlyInterestRate = annualInterestRate / 100 / 12;
  const numberofpayments = loanTermYears;
  const monthlyPayment =
    (loanAmount + monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberofpayments));
  const totalInterest = monthlyPayment * numberofpayments - loanAmount;

  displayResult(monthlyPayment, totalInterest, totalPayment);
}

// function display(monthlyPayment, totalInterest, totalPayment) {
//   const resultDiv = document.getElementById("result");

//   resultDiv.innerHTML = `   <p>
//   <strong>
//   Monthly Payment: ${MonthlyPayment.toFixed(2)}</strong>
//   </p>`;
// }
