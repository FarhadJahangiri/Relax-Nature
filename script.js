// sticky header //

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

//top animated photos// 
let text = document.getElementById('text');
let birdLeft = document.getElementById('birdLeft');
let birdRight = document.getElementById('birdRight');
let cloudLeft = document.getElementById('cloudLeft');
let cloudRight = document.getElementById('cloudRight');
let mountian1 = document.getElementById('mountian1');
let bottom2 = document.getElementById('bottom2');

window.addEventListener('scroll',function(){
    let value = window.scrollY;

    text.style.top = 50 + value * -0.5 + '%';
    birdLeft.style.top = value * -1.5 + 'px';
    birdLeft.style.left = value * -5 + 'px';
    birdRight.style.top = value * -1.5 + 'px';
    birdRight.style.left = value * 2 + 'px';
    mountian1.style.top = value * -0.12 + 'px';
    cloudLeft.style.left = value * +1.5 + 'px';
    cloudRight.style.left = value * -1.5 + 'px';
    bottom2.style.top = value * -1 + 'px';
})

// window.addEventListener('scroll', reveal);

// function reveal(){
//     var reveals = document.querySelectorAll('.reveal');

//     for(var i = 0; i < reveals.length; i++){
        
//         var windowheight = window.innerHeight;
//         var revealtop = reveals[i].getBoundingClientRect().top;
//         var revealpoint = 150;

//         if(revealtop < windowheight - revealpoint){
//             reveals[i].classList.add('avtive');
//         }
//         else{
//             reveals[i].classList.remove('active');
//         }
//     }
// }