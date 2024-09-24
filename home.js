
console.log('1. Create an array of int called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.')
    const ages=(3, 9, 23, 64, 2, 8, 28, 93) //listed array
console.log('a. Programmatically subtract the value of the first element in the array from the value in the last element of the array (i.e. do not use ages[7] in your code). Print the result to the console. ')
    // need to call the array "ages", then pull the first element in the array and subtract it from the last.
    let agesSubtracted=(ages[0]-(ages.length-1))
    console.log(agesSubtracted)  

console.log('b. Create a new array of int called ages2 with 9 elements (ages2 will be longer than the ages array, and have more elements).  ')
    const ages2 = (1,2,3,4,5,6,7,8,9)   
console.log('i. Make sure that there are 9 elements of type int in this new array.  ')
    console.log(ages2.length)//called for the length of the ages2 array
console.log('ii. Repeat the subtraction from Step 1.a. (Programmatically subtract the value of the first element in the new array ages2 from the last element of ages2). ')
    let ages2Subtracted=(ages2[0]-ages2[8]) //set new array and use equation to call for first and last element of the array "ages2" 
    console.log(ages2Subtracted)
console.log('iii. Show that using the index values for the elements is dynamic (works for arrays of different lengths).')
    let ages2Subtracted2=(ages2[0]-ages2[8]) //set new array and use equation to call for first and last element of the array "ages2" 
    console.log(ages2Subtracted2)
console.log('c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.')
    
    totalAge2=0

    for ( i = 0; i < ages2.length; i++ ) {
    totalAge2 = totalAge2 + ages2[i]
        averageAge2 = totalAge2 / ages2.length
    }
    console.log(averageAge2)

console.log('2. Create an array of String called names that contains the following values: “Sam”, “Tommy”, “Tim”, “Sally”, “Buck”, “Bob”.')
    const names =('Sam', 'Tommy', 'Tim', "Sally", "Buck", 'Bob')
    console.log(names)

console.log('a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.')


console.log('b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.')


console.log('3. How do you access the last element of any array?') 

    console.log(array.length-1); //calling the length gives you a the length in the order of 1,2,3 not 0,1,2,3 so you have to subtract one in order to pull the last element

console.log('4. How do you access the first element of any array?')
    console.log(array.[0])// calling for the 0 element calls the first one since the elements in an array go as 0,1,2,3 and not 1,2,3 

console.log('5. Create a new array of int called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.')
    const nameLengths = 

console.log('6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.')


console.log('7. Write a method that takes a String, word, and an int, n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in “Hello” and 3, I expect the method to return “HelloHelloHello”).')


console.log('8. Write a method that takes two Strings, firstName and lastName, and returns a full name (the full name should be the first and the last name as a String separated by a space).')


console.log('9. Write a method that takes an array of int and returns true if the sum of all the ints in the array is greater than 100.')


console.log('10. Write a method that takes an array of double and returns the average of all the elements in the array.')


console.log('11. Write a method that takes two arrays of double and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.')


console.log('12. Write a method called willBuyDrink that takes a boolean isHotOutside, and a double moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.')


console.log('13. Create a method of your own that solves a problem. In comments, write what the method does and why you created it.')

