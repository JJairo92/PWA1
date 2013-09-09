/*
    Jairo Jurado
    09/06/2013
    JavaScript Practice
*/

// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var avgNumbers = function(arr){

        //CODE GOES HERE
        var total = 0;
        arr.forEach(function (n) {
        total += n; // adds each number (element) in the array to the total
        //console.log(total);
        })
        var average = total/arr.length; // the total divided by the length of the array will be the average.
        //console.log(average);

        return average; // function returns the average
    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

        //PUT FUNCTION HERE
        var fullName = function(firstname, lastname) {
            var full = firstname +" "+ lastname; // adds a space between the first and last name

            return full; // returns the full name with a space in between the first and last name
        };

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function"

        //PUT FUNCTION HERE
        var wordCount = function(ipsum) {
            var words = ipsum.split(" "); // creates an array and makes each word an element of the array
            var wordNumber = words.length; // counts the number of elements in the "words" array

            return wordNumber; // returns the number of words in the String
        };

    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

        //PUT FUNCTION HERE
        var charCount = function(ipsum) {
            var charNumber = ipsum.length; // counts the number of characters inside the ipsum String

            return charNumber; // returns the number of characters in the String
        };

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

        //PUT FUNCTION HERE
        var vowelsInWord = function(word) {
            var vowels = 0; // vowels count starts at 0
            var characters = word.split(""); // creates an array, making each character in "word" an element
            
            characters.forEach(function (v) { // checks each element
                if(v == "a" || v == "A" || // checks if in each element, there is a vowel in uppercase or lowercase
                    v == "e" || v == "E" ||
                    v == "i" || v == "I" ||
                    v == "o" || v == "O" ||
                    v == "u" || v == "U") {
                    vowels++; // for every vowel in uppercase or lowercase it finds, it'll add 1 to the vowels count
                }         
            })
            
            return vowels;
        };

    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        //PUT FUNCTION HERE
        var findNum = function(numbers, bool) {
            if(bool == "false" || bool == "undefined") {
                var odd = [];
                for(var i = 0; i < numbers.length; i++) {
                    var remainder = 0;
                    remainder = numbers[i] % 2;
                    if(remainder != 0) {
                        odd.push(numbers[i]);
                    }
                    console.log(odd);
                }
                return odd;
            }


        }

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();