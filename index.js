var fruits = ["mango", "lemon" ,"blueberry"]
//console.log(fruits)
//console.table(fruits)

var ingredients = ["eggs", "milk" ,"butter"]
//console.log(ingredients[1])
//console.log(ingredients.indexOf("butter"))

var objects = ["pen", "book", "lamp"]

objects.unshift("chair");
//console.log(objects)

objects.pop();
//console.log(objects)

objects.push("laptop");
//console.log(objects)

objects.shift();
//console.log(objects)

var numbers = [4, 10, 8, 12 , 6]

//console.log(numbers.reverse())
//console.log(numbers.sort((a, b) => a - b))

var total = 0
var limit = 10

for ( i = 1; i <= limit ; i++){
    total = total + i;
    //console.log(i)
}
//console.log(total)

var sentence = "Hello Konexio !"
var sentenceInverse=""

// for ( i=0; i <= sentence.length - 1 ; i++){
//    sentenceInverse= sentence[i] + sentenceInverse;
//    //console.log(i)
// }
// //console.log(sentenceInverse)


    for (i=0; i<=100; i++){
        if( i % 3 === 0){
            //console.log("fizz ")
        }if( i % 5 === 0){
            //console.log("buzz ")
        } if(i % 3 === 0 && i % 5 === 0){
            //console.log("fizzbuzz ")
        }if (i % 7 === 0){
        }else{
            //console.log(i)
        }
    }

while( total < limit) {
    total = total + i;
    //console.log(i)
}
//console.log(total)

var camarades = ["Salwa", "Jong","Marco","Jeremy","Helene","Alin","Evan","Kevin","Eloi" ]

for (i=0; i<=camarades.length; i++){
    team= camarades[Math.floor(Math.random()*camarades.length)]
}
//console.log(team)

var tableau = []
var min = 0;
var max = 100;

var entierplusgrand = 0

for (i=0; i<20; i++){
   sort=Math.floor(Math.random() * (max - min + 1) + min)
   tableau.push(sort)
   for(i=0; i<=tableau.length; i++){
        if(tableau[i]> entierplusgrand){
            entierplusgrand=tableau[i]
        }
   }
   
}
console.table(tableau)
console.table(entierplusgrand)



