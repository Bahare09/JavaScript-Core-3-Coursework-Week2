

async function programmer() {
 try{ const data = await fetch("https://xkcd.now.sh/?comic=latest");
  const value = await data.json();
  console.log(value)
  document.getElementById("image").src = value.img;}
  catch(err){
    console.log("Error")
  }
}
programmer();
