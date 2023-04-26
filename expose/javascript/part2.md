1. on line 12, prices.length will be output to the console because the variable i can be accessed anywhere within the function, and after completing the for loop in which it is initialized in, i will keep incrementing until it reachs the value of prices.length. in this case, it will print 3.

2. on line 13, the console will output the price in the last index of the array 'prices' with the discount applied, so in this case, it would be 300*.5 which is 150.

3. on line 14, the most recently stored value of finalPrice will be outputted on the console because finalPrice is a global variable, and the last value it stored is the value of the rounded discounted price of the last price in the 'prices' array, so in this case, it would be 150.

4. this funcion will return an array of all the prices in the array 'prices' in the same exact order but with the discount in 'discount' applied to each price.

5. this code will cause an error because 'i' is not accessible or defined in line 12. the 'i' defined in line 6 is only accessible within the for loop scope.

6. the code will cause an error because 'discountedPrice' is not accessible or defined in line 13. the 'discountedPrice' defined in line 7 is only accessible within the for loop in which it is created.

7. on line 14, the most recently stored value of finalPrice will be outputted on the console because finalPrice is a global variable, and the last value it stored is the value of the rounded discounted price of the last price in the 'prices' array, so in this case, it would be 150.

8. this funcion will return an array of all the prices in the array 'prices' in the same exact order but with the discount in 'discount' applied to each price.

9. this code will cause an error because 'i' is not accessible or defined in line 11. the 'i' defined in line 6 is only accessible within the for loop scope.

10. at line 12, the value of prices.length will be output to the console, so in this case, 3 will be output.

11. this funcion will return an array of all the prices in the array 'prices' in the same exact order but with the discount in 'discount' applied to each price. although 'discounted' is of type const, this doesn't mean the list can't be pushed to -- it simply means that 'discounted' can't be reassigned.

12. (A) student.name
12. (B) student['Grad Year']
12. (C) student.greeting()
12. (D) student['Favorite Teacher'].name
12. (E) student.courseLoad[0]

13. (A) '32' because integers map to their string representation
13. (B) 1 because string representations map to their corresponding integer value, so 3 - 2 is 1
13. (C) 3 because null maps to nothing meaning the integer 0 and 3 + 0 is 3
13. (D) '3null' because null maps to its string representation 'null' so this function combines the two strings
13. (E) 4 becuase true maps to 1
13. (F) 0 because false maps to 0 and null maps to nothing meaning the integer 0
13. (G) '3undefined' because undefined maps to its string representation 'undefined' and this function combines the two strings '3' and 'undefined'.
13. (H) NaN because '3' maps to its integer value which is 3, but undefined is not an integer value so the output is not a number.

14. (A) true because '2' maps to its integer value 2 and 2 is greater than 1.
14. (B) false because '2' and '12' are strings, and if sorted, '2' will come after the string '12'.
14. (C) true because '2' maps to the same value as 2, whether they both become strings or integers.
14. (D) false because 2 and '2' are not the same type and === evaluates whether the two values are the same type.
14. (E) false because true evaluates to 1 and 1 is not equal to 2.
14. (F) true because Boolean(2) evaluates to true because the Boolean Function argument is nonempty and non-zero, and true and true are the same type.

15. == evaluates whether the two values are the same after type conversion if necessary. === does not perform type conversion at all -- the operands must have the same type.