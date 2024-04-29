
const balanceEl = document.getElementById('balanceEl');
const moneyInput = document.getElementById('moneyInput');
const list = document.getElementById('list');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const showBtn = document.getElementById('showBtn');


let balance = 0;

function updateBalance(amount) {
  balance += amount;
  balanceEl.textContent = balance;
}


function addTransaction(type, amount, time) {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <th scope="row">${list.children.length + 1}</th>
    <td>${type}</td>
    <td class="${type === 'Cash' ? 'text-success' : 'text-danger'}">${amount}</td>
    <td>${time}</td>
  `;
  list.appendChild(newRow);
}


incrementBtn.addEventListener('click', () => {
  const money = parseFloat(moneyInput.value);
  if (isNaN(money) || money <= 0) {
    alert('Please enter a valid positive amount!');
    return;
  }
  updateBalance(money);
  addTransaction('Cash', money, new Date().toLocaleDateString());
});

decrementBtn.addEventListener('click', () => {
  const money = parseFloat(moneyInput.value);
  if (isNaN(money) || money <= 0) {
    alert('Please enter a valid positive amount!');
    return;
  }
  if (money > balance) {
    alert('Insufficient balance!');
    return;
  }
  updateBalance(-money);
  addTransaction('Expense', -money, new Date().toLocaleDateString());
});

// // showBtn.addEventListener('click', () => {
// //   // You can add any additional functionality here
// // });
