
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
  page = 1;

  getImg();

  function getImg(){

    fetch('http://localhost:3000/photos/'+page , {
      method: 'GET',
  })
  .then(Response =>
      Response.json())
      .then( data =>{ 
        page++;
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          document.getElementById("container").innerHTML+='<div class="boxs" >  <img class="poster" onclick="openVbox();imgpicker('+ i + ')" src="'+ data[i] + '"> </div>';
          document.getElementById("contnt").innerHTML+='<div class="pics" ><img class="picbox"  src="'+data[i]+'" alt=""></div>'+'<img class="sizenext " class="next" onclick="plusSlides(1)"  src="next.png" alt="">'+'<img class="sizeprev" class="prev"  onclick="plusSlides(-1)" src="prev.png" alt="">'
                  } 
      });
  }



  
  window.addEventListener("scroll",()=>{
    const scroll =document.documentElement.scrollHeight - window.innerHeight;
    const scrollpage = window.scrollY;
    if (scroll===scrollpage){
      getImg()
      
    }
  })
 
function showmore (){
  getImg();
}

