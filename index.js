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

for ( var i = 1; i <= limit ; i++){
    total = total + i;
    //console.log(i)
}
//console.log(total)

var sentence = "Hello Konexio !"
var sentenceInverse=""

for ( var i= sentence.length-1 ; i >= 0; i--)

{
   sentenceInverse += sentence[i] ;
   //console.log(sentence[i])
   
}
//console.log(sentenceInverse)



    for (i=0; i<=100; i++){
        if( i % 3 === 0){
            //console.log(`${i} fizz` )
        }if( i % 5 === 0){
            //console.log(`${i} buzz` )
        } if(i % 3 === 0 && i % 5 === 0){
            //console.log(`${i} fizzbuzz`)
        }if (i % 7 === 0){
        }else{
            //console.log(i)
        }
    }


    
while( total < limit) {
    total = total + i;
    //console.log(total)
}
//console.log(total)

var camarades = ["Salwa", "Jong","Marco","Jeremy","Helene","Alin","Evan","Kevin","Eloi" ]

for (var i=0; i<=camarades.length; i++){
    team= camarades[Math.floor(Math.random()*camarades.length)]
}
//console.log(team)

var tableau = []
var min = 0;
var max = 100;
var sort

var entierplusgrand = 0

for (var i=0; i<20; i++){
   sort=Math.floor(Math.random() * (max - min + 1) + min)
   tableau.push(sort)
   
   
}

for(var i=0; i<=tableau.length; i++){
    if(tableau[i]> entierplusgrand){
        entierplusgrand=tableau[i]
        
    }
}

//console.table(tableau)
//console.table(entierplusgrand)

// Jour 3 v 2

// ## 1 - Nombre pairs

var somme = 0

for ( var i = 11; i <=46; i++){
    if(i%2 === 0){
        //console.log(i,"est pair") 
        somme = somme +i;
    }
}
//console.log(somme)

//2 - Nombre impairs

var somme = 0

for ( var i = 109; i <=587; i++){
    if(i%2 !== 0){
        //console.log(i,"est impair") 
        somme = somme +i;
    }
}

//console.log(somme)

// 3 - Puissance et racine carrée

var numbers = [1,2,3,4,5]
var squares = []
var roots = []

for(var i = 0; i < numbers.length; i++){
    squares[i]=numbers[i]*numbers[i]
    }
//console.log(squares)

for(var i = 0; i < squares.length; i++){
    roots[i]=squares[i]/numbers[i]
    }
//console.log(roots)

// 3 - Table de multiplication v1

var resultat;
var nombre = 3
var tableau;

for(var i = 0; i < 11; i++){
    resultat= nombre*i;
    tableau=`${nombre} x ${i} = ${resultat}`
    //console.log(tableau)
}

// Table de multiplication v2

var result;

for(var i=0; i< 11; i++){
    //console.log("")
    for(var j=0; j< 11; j++){
        result= i*j;
        //console.log(`${i}x${j}=${result}`)
    }
}

// 6 - Factorielle v1

var factorielle = 7

for(var i = 1; i<7; i++){
    factorielle=factorielle*i;
}
//console.log(factorielle)

//7 - Factorielle v2



//  8 - Somme des carrés

var carre;
var carreSomme= 0;

for(var i=5; i<=10; i++){
    carre=i*i;
    //console.log(carre)
    carreSomme=carreSomme+carre;
    //console.log(carreSomme)
}

//  9 - Comptons

var count=0

for (var i=100; i<=1000; i++ ){
    if(i%7 === 0){
       count++
    }
}
//console.log(count) 

// 10 - Chanceux

var de
var min = 1;
var max = 6;
var compteur=0

for(i=0; i<20; i++){
    de=Math.floor(Math.random() * (max - min + 1) + min)
    //console.log(de)
    if(de>=5){
        compteur=compteur+de;
    }
}
//console.log(compteur)

// Mega Bonus - Amstrong Number

