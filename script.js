function Calculator(num1,num2,operator){
    switch(operator){
        case '+':
            return num1 + num2;

            case '-':
                return num1 - num2;

            case '*':
                return num1 * num2;

            case '/':
                return num1 / num2;

            case '%':
                 return num1 % num2;
    }

}

console.log(Calculator(10,5 ,'+'));
console.log(Calculator(10,5 ,'-'));
console.log(Calculator(10,5 ,'*'));
console.log(Calculator(10,5 ,'/'));
console.log(Calculator(10,5 ,'%'));
