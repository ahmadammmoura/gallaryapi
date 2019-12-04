document.getElementById('post').addEventListener('click',add)
function openpost(){
document.getElementById('postdiv').style.display="block"
document.getElementById('delete').style.display="none"

}
function opendelete(){
    document.getElementById('delete').style.display="block"
    document.getElementById('postdiv').style.display="none"

    }
  function add (){
    const photoUrl = document.getElementById('photo').value;
    const movieName = document.getElementById('name').value;
    const desc = document.getElementById('desc').value

    const myheader = new Headers();

    myheader.append('Content-Type', 'application/json');
    fetch('http://localhost:3000/photos',{
      method :'post',
      headers : myheader,
      body : JSON.stringify({
        photourl : photoUrl,
        name : movieName,
        desc : desc
      })

    })
    .then(response=>response.json())
    .then((data) => {
      console.log(data);
    })
       
    
  }