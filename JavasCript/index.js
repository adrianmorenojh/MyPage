console.log('holis')

var DrInk= 
    [
    '../public/images/Dr.Ink/drink1.png',
    '../public/images/Dr.Ink/drink2.png',
    '../public/images/Dr.Ink/drink3.png',
    '../public/images/Dr.Ink/drink4.png',
    '../public/images/Dr.Ink/drink5.png'
    ];
var Pelis= 
    [
    '../public/images/pelis/pelis1.png',
    '../public/images/pelis/pelis2.png',
    '../public/images/pelis/pelis3.png'
    ];
var count = 0;

function rotation(){
    count ++
    if(count === 4){
        count=0;
    }
    document.getElementById("image").src=DrInk[count];
}
function rotationPelis(){
    count ++
    if(count === 2){
        count=0;
    }
    document.getElementById("imagePelis").src=Pelis[count];
    debugger
}

onload=function(){

    setInterval(() => {
        rotationPelis()
        rotation()
    }, 5000);
}