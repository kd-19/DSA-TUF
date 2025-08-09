function  isPalindrome(n) {
        let originalNumber = n;
        let reverseNumber = 0;

        while(n > 0){
            let lastDigit = n % 10;
            reverseNumber = (reverseNumber * 10) + lastDigit;
            n = Math.floor(n/10); 
        }

        return originalNumber === reverseNumber;
    }
 
const result = isPalindrome(464); // You can change input here
console.log(result);    