# Exercises

## Exercise 1

Draw a square with *

## Exercise 2

draw an arrow with *

## Exercise 3

draw a diamond with *

## exercise 4

kinda return the nth fibonaci number

## exercise 5

Return the nth fibonaci number

## exercise 6

Calculate the surface of a square or triangle depending on user input.
Users enters height and width.
if other shapes are required code must easily be adapted.

## exercise 7

Check if the entered number is a prime number

## excercise 7b

return the last character of a word WIHTOUT using arrays or google

## exercise 8

Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:

`*********
`* Hello *
`* World *
`* in    *
`* a     *
`* frame *
`*********

## exercise 9

convert text to morse code
[morsecode guide](https://en.wikipedia.org/wiki/Morse_code)

## exercise 10

Write two different functions that compute the sum of the numbers in a list using:

- a for-loop
- a while-loop

## Exercise 10b

comment on draw a diamond with * (located in the Finished folder)

## Exercise 10c

comment on Ex7PrimeNrsv2.html

## excercise 11

Write a program that finds the longest palindromic substring of a given string. Try to be as efficient as possible!
'ik drink soep met een vork en geen lepel
'ik drink soep met een vork en geen lepel. lol!

## exercise 12

### side note because I know you will try this

Don't use any in house javascript methods
Write a program that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]

## excercise 13

### side note because I know you will try this

Don't use any in house javascript methods
Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

## excercise 14

### side note because I know you will try this

Don't use any in house javascript methods

Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the list. How many swap or move operations do you need?

## excercise 15

Write a function that sorts all numbers of an array in an order from low to high.

## exercise 16

Write a program that plays Rock, Paper, Scissors better than random against a human. Try to exploit that humans are very bad at generating random numbers.

## excercises to write with a function

### exercise a

Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:

`*********
`* Hello *
`* World *
`* in    *
`* a     *
`* frame *
`*********

### exercise b

#### side note because I know you will try this

Don't use any in house javascript methods
Write a program that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]

### excercise c

#### side note because I know you will try this

Don't use any in house javascript methods
Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

need to fix this before next session

### exercise d

with the new system and the game stops when the computer has won.
Write a program that plays Rock, Paper, Scissors better than random against a human. Try to exploit that humans are very bad at generating random numbers.

### exercise e

Check if the entered number is a prime number

### exercise f

Return the nth fibonaci number

### Exercise g

comment on draw a diamond with * (located in the Finished folder)
now do this with a function

### exercise h

Calculate the surface of a square or triangle depending on user input.
Users enters height and width.
if other shapes are required code must easily be adapted.

## excercise 17

write a function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

### Sample Test Cases
var word = "coderbyte";
return word;

- Input:"coderbyte"
- Output:"bcdeeorty"

- Input:"hooplah"
- Output:"ahhloop"

## excercise 18

 as input you get a number of minutes and you should return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

### Sample Test Cases

- Input:126
- Output:"2:6"
- Input:45
- Output:"0:45"

## excercise 19

General Statement: Convert a given US dollar amount to Pounds, Lira, Francs, Marks, or Yen.

Input: The first line in the data set is an integer that represents the number of data collections that follow. Each collection consists of an number US dollar amount followed by the name of the currency to be converted to.

Output: Output a dollar sign ($), the US dollar amount and the words CONVERTS TO and then the converted amount followed by the currency unit name.
If the conversion factor is an integer, output an integer. If it is a decimal, round to 2 decimal places.
The output is to be formatted exactly like that for the sample output given below.

Assumptions: The US dollar amount is an integer in the range 1..500.
All letters are upper case.

50 Lira = $x
50 Pounds = $x

## extra excercise for if you get stuck
Make a program that extracts the maxumum ammount information of a rijkrestigster number and that it is a leggit number.

Het identificatienummer bevat 11 cijfers:[1]

Een eerste groep van zes cijfers, gevormd door de geboortedatum in de volgorde: jaar, maand, dag. Maand en/of dag kunnen nul zijn indien de exacte geboortedatum niet bekend is. Indien de persoon niet ingeschreven is in het Rijksregister, maar er toch gegevens moeten worden bijgehouden voor de sociale zekerheid, bijvoorbeeld buitenlandse werknemers die minder dan drie maanden in België verblijven of grensarbeiders, dan wordt een bisnummer toegekend. Bij het bisnummer wordt de geboortemaand verhoogd met 20 of 40. Als bij de aanvraag het geslacht bekend is, wordt de geboortemaand verhoogd met 40, anders wordt ze verhoogd met 20. Indien de persoon vluchteling is en de geboortedatum niet gekend is, wordt de geboortemaand op 00 gezet en de geboortedag op 00 gezet.
Een tweede groep van drie cijfers dient als herkenning van de personen die op dezelfde dag geboren zijn. Dit reeksnummer is even voor een vrouw en oneven voor een man. Het is de dagteller van de geboortes. Voor een man van 001 tot 997 en voor een vrouw van 002 tot 998.
Een derde groep van twee cijfers is een controlegetal op basis van de 9 voorafgaande cijfers. Dat wordt berekend door het getal van negen cijfers, dat gevormd wordt door de aaneenschakeling van de geboortedatum en het reeksnummer, te delen door 97. De rest van deze deling ("modulo") wordt van 97 afgetrokken. Het aldus verkregen verschil is het controlenummer. Voor personen geboren in of na 2000 moet men een 2 voor het getal van negen cijfers zetten (+ 2000000000) alvorens te delen door 97.
Voorbeeld: Is een man geboren op 18 mei 1993, dan is een mogelijk nummer 93051822361. Immers, 930518223 gedeeld door 97 is 9592971+36. Het verschil van 97 en de rest levert 97 - 36 = 61 op.

## excercise 20

write some code that will rework the input of a phonenumber to the international standard. If a phonenumber is entered without a country code you can asume that the phonenumber is Belgian. (+32)

some sample inputs:
015/51.67.54
0470/45.22.33
0032470452233
(00)32470452233
0044142341156
+1-541-754-3010
(541) 754-3010
001-541-754-3010

sample output
+32470452233
+3215516754


## excercise 21

swap your dads name with your moms.

## exercise 22

[[0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 2], [0, 0, 0, 2]]
read a matrix of numbers and store it in a multi dimmensional array.
Make a function that will be able to find all positions of a certain number and displays that.

### Sample input

0 0 0 0
1 0 0 0
0 0 0 2
0 0 0 3

## excercise 23

Write a function that will calculate the distance between two points. (pythagoras is your friend)
The input given is an x and a y coordinate

## Excercise 24

calculate the distance between two numbers in a multi dimmensional array. 
write a function that will calculate the distance between two items in a multi dimensional array.
every number should be present in the matrix once except of zero. These are blanks and doesn't need to be supported.

### Sample input

0 0 0 0
1 0 0 0
0 0 0 2
0 0 0 3

## excercise 26

As discussed during last session there is  a clear distinction between var and let wich might create loads of error in previously written code because of scoping and what not. Now revisit following sources:

- Ex5Fibonacci2.html
- Ex10SumForLoop.html

## excercise 27

read a multi number array. Then calculate the sum of the rows and the columns. Add these as extra cells to the array.
note that
numbers will be , separated
rows will be ; separated

10,11,12,13;sum(row1)
12,27,34,25;sum(row2)
15,16,34,78;sum(row3)
456,453,156,564;sum(row4)
sum(col1),sum(col2),sum(col3),sum(col4);

## excercise 28

You're no longer limited to technologies. So fronted wise it is your call.

make a library application. Someone using it should be able to:
- add books
    - book title
    - book author
    - year of publication
    - genre
- remove books
- say where the books are located
- look for books on one of the following types
    - title
    - author
    - genre
    - year of publication
    - location

## excercise 29

Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one

## excercise 30 a

make a class Person with the typical physioligical traits that one has. Don't go overboard on the amount of details.

## excercise 30 b

make a class display that will display the traits that a person has

## excercise 31

re-use this Person-class. Make a class Group where you can add multiple objects of the class Person
make it possible to create a person through whatever interface you would like. (nope a mouse or controler is not a proper interface for this)

## Excercise 32

Create a class Shape, this shape class contains the name of the shape. Also make 2 other classes Triangle and Square which inherrit from Shape and add a function which allows them to calculate the surface of that object.

implement this in a webpage.

## Excercise 33

make a shape collection that can have mutliple shapes in it and can calculate the total surface within it's shapes.

implement this in a webpage.

## Excercise 34

use the Document object to build a form that contains the following fields. Don't forget to check for the ready state before you start createing these elements. Otherwise the code might just fail because there is not document object present or no body object present.

* name - this is a textbox where a user can enter his name *required*
* adress - this a textbox where a user can enter his adress
* phonenumber - this a textbox where a user can enter his phone number

The phonenumber field should have validation on it so that when the user moves to another field it shows an error message saying that the input is not valid. 
When at any point it contanis a valid input the error message shouldn't appear or should be removed by the code.

also add an "Add" button which will add the adress in an array that you keep outside of your main function so that it is available in the global scope.
The Add button has followng characteristics
* it is clickeable only if all the required fields are filled in
* there should be no validation errors on other fields