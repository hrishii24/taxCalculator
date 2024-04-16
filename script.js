document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("taxCalculatorForm");
  const grossIncomeInput = document.getElementById("grossIncome");
  const extraIncomeInput = document.getElementById("extraIncome");
  const ageGroupSelect = document.getElementById("ageGroup");
  const deductionsInput = document.getElementById("deductions");
  const modalBody = document.getElementById("result");
  const modalHead = document.getElementById("staticBackdropLabel");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const grossIncome = parseFloat(grossIncomeInput.value);
    const extraIncome = parseFloat(extraIncomeInput.value);
    const deductions = parseFloat(deductionsInput.value);
    const totalIncome = grossIncome + extraIncome - deductions;
    const ageGroup = ageGroupSelect.value;
    let tax = 0;

    if (totalIncome > 800000) {
      const taxableIncome = totalIncome - 800000;
      if (ageGroup === "under40") {
        tax = 0.3 * taxableIncome;
      } else if (ageGroup === "40to60") {
        tax = 0.4 * taxableIncome;
      } else if (ageGroup === "over60") {
        tax = 0.1 * taxableIncome;
      }
    }

    const overallIncome = totalIncome - tax;
    modalHead.innerHTML = `Total tax is ${tax.toFixed(2)}`;
    modalBody.innerHTML = `Overall income after tax deduction will be ${overallIncome.toFixed(
      2
    )} ₹`;
    form.reset();
  });
});
