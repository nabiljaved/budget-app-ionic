const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const clearItems = document.querySelector('#btn-clearlist')

let totalExpenses = 0;

const clear = () => {
  reasonInput.value = '';
  amountInput.value = '';
};


  clearItems.addEventListener('click', ()=>{
    expensesList.innerHTML = ""
    totalExpensesOutput.textContent = ""
  })



  confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (
      enteredReason.trim().length <= 0 ||
      enteredAmount <= 0 ||
      enteredAmount.trim().length <= 0
    ) {
      // alertCtrl
      //   .create({
      //     message: 'Please enter valid reason and amount!',
      //     header: 'Invalid inputs',
      //     buttons: ['Okay']
      //   })
      //   .then(alertElement => {
      //     alertElement.present();
      //   });
      // return;
      presentAlert()
      return
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expensesList.appendChild(newItem);

    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = totalExpenses;
    clear();
  });



cancelBtn.addEventListener('click', clear);

async function presentAlert() {
  const alert = document.createElement('ion-alert');
  alert.header = 'Invalid Inputs';
  alert.message = 'Please enter valid reason and amount!';
  alert.buttons = ['OK'];

  document.body.appendChild(alert);
  await alert.present();

}
