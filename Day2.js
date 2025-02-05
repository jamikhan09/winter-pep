// simulate the  const and let for banking application by declaring the following function to  -----create account(), withdraw(),and depositing ()


// function bankAccount(){
//     let accNum=434;
//     let balance=0;
//     return{
//         createAccount: function(){
//             accNum= accNum+1;
//             console.log("Account created with account number: ", accNum);
//         },
        
//         deposit:function(amount){
//             if(amount>0){
//                 balance+=amount;
//                 console.log("the bal is: ",balance);
//             }
//             else{
//                 console.log("amount deposited should be greater than 0");
//             }
//         },

//         withdraw: function(amount){
//             if(amount>balance){
//                 console.log("insufficient balance---");
//             }
//             else if(amount<balance){
//                 balance-=amount;
//                 console.log("the withdrawl money is: ",amount);
//                 console.log("the balance after withdrwal is : ",balance);
//             }
//             else if(amount<0){
//                 console.log("withdrwal amount should be greater than 0");
//             }
//         },
            
//     }

// }

// const myAccount=bankAccount();
// myAccount.createAccount();
// myAccount.deposit(40000);
// myAccount.withdraw(20000);




function bankAccount() {
    let accNum = 434;
    let balance = 0;
    return {
      createAccount: function () {
        accNum = accNum + 1;
        showOutput(`Account created with account number: ${accNum}`);
      },
      deposit: function (amount) {
        if (amount > 0) {
          balance += amount;
          showOutput(`Deposited: ${amount}. Current balance: ${balance}`);
        } else {
          showOutput("Deposit amount should be greater than 0");
        }
      },
      withdraw: function (amount) {
        if (amount > balance) {
          showOutput("Insufficient balance.");
        } else if (amount > 0) {
          balance -= amount;
          showOutput(`Withdrawn: ${amount}. Remaining balance: ${balance}`);
        } else {
          showOutput("Withdrawal amount should be greater than 0");
        }
      },
    };
  }

  const myAccount = bankAccount();

  // Function to handle account creation
  function createAccount() {
    myAccount.createAccount();
  }

  // Function to handle deposit
  function deposit() {
    const amount = parseFloat(document.getElementById("depositAmount").value);
    if (!isNaN(amount)) {
      myAccount.deposit(amount);
    } else {
      showOutput("Please enter a valid deposit amount.");
    }
  }

  // Function to handle withdrawal
  function withdraw() {
    const amount = parseFloat(document.getElementById("withdrawAmount").value);
    if (!isNaN(amount)) {
      myAccount.withdraw(amount);
    } else {
      showOutput("Please enter a valid withdrawal amount.");
    }
  }

  // Function to display output
  function showOutput(message) {
    document.getElementById("outputText").innerText = message;
  }