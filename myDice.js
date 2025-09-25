var btn = document.querySelector(".button2");


var imgs = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];


btn.addEventListener("click",function(){


    var randomNumber1 = Math.floor (Math.random() * 6 );
    var randomNumber2 = Math.floor (Math.random() * 6 );

    document.querySelector(".img1").setAttribute("src" , imgs[randomNumber1]);
    document.querySelector(".img2").setAttribute("src" , imgs[randomNumber2]);
}

);



/*

var btn = document.querySelector(".button2");


var diceImages = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
];

// Butona tıklayınca çalışacak

btn.addEventListener("click", function () {
    var randomNumber1 = Math.floor(Math.random() * 6);
    var randomNumber2 = Math.floor(Math.random() * 6);

    document.querySelector(".img1").setAttribute("src", diceImages[randomNumber1]);
    document.querySelector(".img2").setAttribute("src", diceImages[randomNumber2]);
});




*/