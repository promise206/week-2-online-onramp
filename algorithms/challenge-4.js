function withdraw(amount) {
  let amountLess100 = amount % 100;
  let hunderedNaira = (amount - amountLess100) / 100;
  let amountLess50 = amountLess100 % 50;
  let fiftyNaira = (amountLess100 - amountLess50) / 50;
  let twentyNaira = amountLess50 / 20;
  return [hunderedNaira, fiftyNaira, twentyNaira];
}
module.exports = withdraw;
