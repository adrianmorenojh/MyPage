console.log('holis')

var DrInk= 
    [
    './images/Dr.Ink/drink1.png',
    './images/Dr.Ink/drink2.png',
    './images/Dr.Ink/drink3.png',
    './images/Dr.Ink/drink4.png',
    './images/Dr.Ink/drink5.png'
    ];
var Pelis= 
    [
    './images/pelis/pelis1.png',
    './images/pelis/pelis2.png',
    './images/pelis/pelis3.png'
    ];
var count = 0;
var countPelis = 0;
function rotation(){
    count ++
    if(count === 5){
        count=0;
    }
    document.getElementById("image").src=DrInk[count];
}
function rotationPelis(){
    countPelis ++
    if(countPelis === 3){
        countPelis=0;
    }
    document.getElementById("imagePelis").src=Pelis[countPelis];
}

onload=function(){
    rotationPelis()
    rotation()
    setInterval(() => {
        rotationPelis()
        rotation()
    }, 5000);
}