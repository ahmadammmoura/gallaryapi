let page = 1;

function openVbox(){
      document.getElementById("viewbox").style.display="block";
}
function closeVbox() {
    document.getElementById("viewbox").style.display = "none";
  }
  var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function imgpicker(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("pics");
    var dots = document.getElementsByClassName("picbox");  
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  
  }
  

  document.getElementById('container');
  let arr=[];

  const myheaders = new Headers();
  fetch('http://localhost:3000/photos?page=' + page , {
        method: 'GET',
    })
    .then(Response =>
        Response.json())
        .then( arrayphoto =>{ console.log(arrayphoto.photos[5])
          page++;
          for (var i = 0; i < 19; i++) {
            document.getElementById("container").innerHTML+='<div class="boxs" >  <img class="poster" onclick="openVbox();imgpicker('+ i + ')" src="'+ arrayphoto.photos[i] + '"> </div>';
          }
        });
        let arr2 = [arr,]
  // for (var i = 0; i < 19; i++) {
  //       document.getElementById("container").innerHTML+='<div class="boxs" >  <img class="poster" onclick="openVbox();imgpicker('+ i + ')" src="'+ arrayphoto.photos[i] + '"> </div>';
  //               }
// function addData2(){
//   const html = arr.map((item, index) => {
//       return  '<div class="pics" ><img class="picbox"  src="'+item.url+'" alt=""></div>'+'<img class="sizenext " class="next" onclick="plusSlides(1)"  src="next.png" alt="">'+'<img class="sizeprev" class="prev"  onclick="plusSlides(-1)" src="prev.png" alt="">'
//   });
//   document.getElementById('contnt').innerHTML = html.join('');
// }
 
// function showmore (){

// }
