function showDropdown() {
    document.getElementById('dropShow').style.display = 'block';
    document.getElementById('dropBtn').setAttribute('onclick', 'hideDropdown()');
}

function hideDropdown() {
    document.getElementById('dropShow').style.display = 'none';
    document.getElementById('dropBtn').setAttribute('onclick', 'showDropdown()');
}

/////////////////////////////////////////////////
function showNavIcon() {

    if (window.matchMedia("(max-width: 992px)").matches) {

        document.getElementById('menu').style.cssText = `
            opacity: 1;
            transform: translateY(16%);
            transition: 0.5s all;
        `;

    }else {
        document.getElementById('menu').style.cssText = `
            opacity: 1;
            transform: translateY(60%);
            transition: 0.5s all;
        `;
    }
    
    var navIcon = document.getElementById('navIcon');
    navIcon.setAttribute('onclick', 'hideNavIcon()');
    navIcon.innerHTML = 'X';
    navIcon.style.cssText = `
        transform: rotate(360deg);
        transition: ease-in 0.5s all;
        height: 60px;
        font-size: 43px;
    `;
}

function hideNavIcon() {
    document.getElementById('menu').style.cssText = `
        opacity: 0;
        transform: translateY(-200%);
        transition: 0.5s all;
    `;
    var navIcon = document.getElementById('navIcon');
    navIcon.setAttribute('onclick', 'showNavIcon()');
    navIcon.innerHTML = '☰';
    navIcon.style.cssText = `
        transform: rotate(0deg);
        transition: ease-in 0.5s all;
    `;
}

//////////////////////////////////////////////////////
function showNavbarToggle() {

    var navbar = document.getElementById("navBar");
    if (navbar.className === "navBar") {
      navbar.className += " responsive";
 
    } else {
      navbar.className = "navBar";
    }
}

////////////////////////////////////////////////////////
var img = ['Images/1.jpg', 'Images/2.jpg', 'Images/3.jpg', 'Images/4.jpg', 'Images/5.jpg'];

img.map(item => {
    var image = document.createElement('img');

    image.setAttribute('src', item);
    image.className += 'image';
    document.getElementById('slider').appendChild(image);
})

setInterval(function(){ plusSlides(1); }, 3000);         // Change image every 3 seconds

var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {                 //When you click on the arrow, the image will change to the next one
  showSlides(slideIndex += n);
}

function currentSlide(n) {               // When you click on any circle, The selected image will be active
  showSlides(slideIndex = n-1);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("image");
    var dots = document.getElementsByClassName("dot");

    if (n === slides.length) {
        slideIndex = 0;
    }    

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // console.log('n', n);
    // console.log('slideIndex', slideIndex);
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
}

////////////////////////////////////////////////////////
// var products = ['Images/product1.jpg', 'Images/product2.jpg', 'Images/product3.jpg', 'Images/product4.jpg', 'Images/product5.jpg'];

// products.map(item => {
//     var image = document.createElement('img');
//     var colFlexisel = document.getElementById('colFlexisel');

//     image.setAttribute('src', item);
//     image.className += 'imgProduct';
//     colFlexisel.appendChild(image);
// })

var index = 0;
showProducts(index);

setInterval(function(){ plusProduct(1); }, 2500);

function plusProduct(n) {                 //When you click on the arrow, the image will change to the next one
    showProducts(index += n);
}
  
function showProducts(n) {
    var i;
    var product = document.getElementsByClassName("flexiselItem");

    if (n === product.length) {
        index = 0;
    }

    if (n < 0) {
        index = product.length - 1;
    }

    // console.log('n', n);
    // console.log('index', index);


    for (i = 0; i < product.length; i++) {
        product[i].style.display = "none";  
    }
    product[index].style.display = "block";  
}

/////////////////////////////////////////////////////////
function showQuestions(n) {
    if (n == 1) {

        document.getElementById('paragraph1').style.display = 'block';
        document.getElementsByClassName('item1')[0].setAttribute('onclick', 'hideQuestions(1)');

    } else if(n == 2) {

        document.getElementById('paragraph2').style.display = 'block';
        document.getElementsByClassName('item2')[0].setAttribute('onclick', 'hideQuestions(2)');

    }else if (n == 3) {

        document.getElementById('paragraph3').style.display = 'block';
        document.getElementsByClassName('item3')[0].setAttribute('onclick', 'hideQuestions(3)');

    }else {

        document.getElementById('paragraph4').style.display = 'block';
        document.getElementsByClassName('item4')[0].setAttribute('onclick', 'hideQuestions(4)');
    }
}

function hideQuestions(n) {
    if (n == 1) {

        document.getElementById('paragraph1').style.display = 'none';
        document.getElementsByClassName('item1')[0].setAttribute('onclick', 'showQuestions(1)');

    } else if(n == 2) {

        document.getElementById('paragraph2').style.display = 'none';
        document.getElementsByClassName('item2')[0].setAttribute('onclick', 'showQuestions(2)');

    }else if (n == 3) {

        document.getElementById('paragraph3').style.display = 'none';
        document.getElementsByClassName('item3')[0].setAttribute('onclick', 'showQuestions(3)');

    }else {

        document.getElementById('paragraph4').style.display = 'none';
        document.getElementsByClassName('item4')[0].setAttribute('onclick', 'showQuestions(4)');
    }
}

//-------------- scroll to top of page ------------
window.onscroll = function scrollFunction() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        document.getElementById("toTop").style.display = "block";

    } else {

        document.getElementById("toTop").style.display = "none";
    }
}

function scrollToTop() { 
    window.scrollTo({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
    });
}
