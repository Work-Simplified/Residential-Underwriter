import { useState } from "react";

export default function UnderwritingTool() {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [monthlyRent, setMonthlyRent] = useState(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [downPaymentPercent, setDownPaymentPercent] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);

  const downPayment = (purchasePrice * downPaymentPercent) / 100;
  const loanAmount = purchasePrice - downPayment;
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  const monthlyMortgage =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  const totalMonthlyExpenses = parseFloat(monthlyExpenses) + monthlyMortgage;
  const monthlyCashFlow = monthlyRent - totalMonthlyExpenses;
  const annualCashFlow = monthlyCashFlow * 12;
  const totalInvestment = downPayment;
  const cashOnCashReturn = ((annualCashFlow / totalInvestment) * 100).toFixed(2);

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Residential Underwriting Tool</h1>

      <div className="bg-white shadow rounded p-4 grid gap-4">
        <input
          type="number"
          className="border rounded p-2"
          placeholder="Purchase Price"
          onChange={(e) => setPurchasePrice(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="border rounded p-2"
          placeholder="Monthly Rent"
          onChange={(e) => setMonthlyRent(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="border rounded p-2"
          placeholder="Monthly Expenses (excluding mortgage)"
          onChange={(e) => setMonthlyExpenses(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="border rounded p-2"
          placeholder="Down Payment %"
          value={downPaymentPercent}
          onChange={(e) => setDownPaymentPercent(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="border rounded p-2"
          placeholder="Interest Rate %"
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="border rounded p-2"
          placeholder="Loan Term (Years)"
          value={loanTerm}
          onChange={(e) => setLoanTerm(parseFloat(e.target.value))}
        />
      </div>

      <div className="bg-gray-100 shadow rounded p-4 text-center space-y-2">
        <p>📉 Monthly Mortgage: <strong>${monthlyMortgage.toFixed(2)}</strong></p>
        <p>💸 Total Monthly Expenses: <strong>${totalMonthlyExpenses.toFixed(2)}</strong></p>
        <p>📈 Monthly Cash Flow: <strong>${monthlyCashFlow.toFixed(2)}</strong></p>
        <p>💰 Cash-on-Cash Return: <strong>{cashOnCashReturn}%</strong></p>
      </div>
    </div>
  );
}
