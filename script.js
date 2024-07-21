document.getElementById('add-expense').addEventListener('click', addExpense);

let totalAmount = 0;

function addExpense() {
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

    if (expenseName !== '' && !isNaN(expenseAmount) && expenseAmount > 0) {
        const expenseList = document.getElementById('expenses');
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${expenseName} - $${expenseAmount.toFixed(2)}
            <button class="delete-btn">X</button>
        `;
        expenseList.appendChild(listItem);

        totalAmount += expenseAmount;
        document.getElementById('total-amount').textContent = totalAmount.toFixed(2);

        // Clear input fields
        document.getElementById('expense-name').value = '';
        document.getElementById('expense-amount').value = '';

        // Add delete functionality
        listItem.querySelector('.delete-btn').addEventListener('click', () => {
            listItem.remove();
            totalAmount -= expenseAmount;
            document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
        });
    } else {
        alert('Please enter a valid expense name and amount.');
    }
}
