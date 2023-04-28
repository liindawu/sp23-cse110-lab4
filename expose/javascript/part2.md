1. on line 12, prices.length will be output to the console because the variable i can be accessed anywhere within the function, and after completing the for loop in which it is initialized in, i will keep incrementing until it reachs the value of prices.length. in this case, it will print 3.

2. on line 13, the console will output the price in the last index of the array 'prices' with the discount applied, so in this case, it would be 300*.5 which is 150.

3. on line 14, the most recently stored value of finalPrice will be outputted on the console because finalPrice is a global variable, and the last value it stored is the value of the rounded discounted price of the last price in the 'prices' array, so in this case, it would be 150.

4. this function will return an array of all the prices in the array 'prices' in the same exact order but with the discount in 'discount' applied to each price.

5. this code will cause an error because 'i' is not accessible or defined in line 12. the 'i' defined in line 6 is only accessible within the for loop scope.

6. the code will cause an error because 'discountedPrice' is not accessible or defined in line 13. the 'discountedPrice' defined in line 7 is only accessible within the for loop in which it is created.

7. on line 14, the most recently stored value of finalPrice will be outputted on the console because finalPrice is a global variable, and the last value it stored is the value of the rounded discounted price of the last price in the 'prices' array, so in this case, it would be 150.

8. this function will return an array of all the prices in the array 'prices' in the same exact order but with the discount in 'discount' applied to each price.

9. this code will cause an error because 'i' is not accessible or defined in line 11. the 'i' defined in line 6 is only accessible within the for loop scope.

10. at line 12, the value of prices.length will be output to the console, so in this case, 3 will be output.

11. this function will return an array of all the prices in the array 'prices' in the same exact order but with the discount in 'discount' applied to each price. although 'discounted' is of type const, this doesn't mean the list can't be pushed to -- it simply means that 'discounted' can't be reassigned.

12. 
    - (A) student.name
    - (B) student['Grad Year']
    - (C) student.greeting()
    - (D) student['Favorite Teacher'].name
    - (E) student.courseLoad[0]

13.   
    - (A) '32' because integers map to their string representation
    - (B) 1 because string representations map to their corresponding integer value, so 3 - 2 is 1
    - (C) 3 because null maps to nothing meaning the integer 0 and 3 + 0 is 3
    - (D) '3null' because null maps to its string representation 'null' so this function combines the two strings
    - (E) 4 becuase true maps to 1
    - (F) 0 because false maps to 0 and null maps to nothing meaning the integer 0
    - (G) '3undefined' because undefined maps to its string representation 'undefined' and this function combines the two strings '3' and 'undefined'.
    - (H) NaN because '3' maps to its integer value which is 3, but undefined is not an integer value so the output is not a number.

14. 
    - (A) true because '2' maps to its integer value 2 and 2 is greater than 1.
    - (B) false because '2' and '12' are strings, and if sorted, '2' will come after the string '12'.
    - (C) true because '2' maps to the same value as 2, whether they both become strings or integers.
    - (D) false because 2 and '2' are not the same type and === evaluates whether the two values are the same type.
    - (E) false because true evaluates to 1 and 1 is not equal to 2.
    - (F) true because Boolean(2) evaluates to true because the Boolean Function argument is nonempty and non-zero, and true and true are the same type.

15. == evaluates whether the two values are the same after type conversion if necessary. === does not perform type conversion at all -- the operands must have the same type.
1

17. the result will be that modifyArray will return the original array but with each value inside of it doubled, since that is what the function doSomething does to an input. this conclusion can be arrived at by looking inside the for loop inside modifyArray, where it iterates through each index in array while putting its corresponding value in the callback function, which is doSomething in this case. looking into the function doSomething, it simply returns the input value doubled, and this value is pushed into newArr, which is the array that will be returned.

19. the output of the code is 1 4 and 3 simultaneously in that order, and after a 1 second delay, 2 is output.
