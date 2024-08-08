#! /usr/bin/env node
// project ATM Machine // modifi colourfull
import inquirer from "inquirer";
import chalk from "chalk";
// initialize user balance and pin code
let myBalance = 6000;
let myPin = 12345;
// print wellcome message
console.log(chalk.blue("\n \twellcome to code with Sham - ATM Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.red("Enter your pin code:")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\nPin is Correct, Login Successfully!\n"));
    console.log(`Current Account Balance is ${myBalance} `);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation: ",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a Withdraw method:",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: "select Amount:",
                    choices: [1000, 2000, 5000, 10000, 20000, 50000]
                }
            ]);
            if (fastcashAns.fastcash > myBalance) {
                console.log(chalk.yellow("\nInsufficient Balance\n"));
            }
            else {
                myBalance -= fastcashAns.fastcash;
                console.log(`${fastcashAns.fastcash} withdraw successfully`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdraw successfully`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
        }
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Account Balance is: ${myBalance}`);
    }
}
else {
    console.log(chalk.blue("Pin is Incorrect, Try again!"));
}
9;
