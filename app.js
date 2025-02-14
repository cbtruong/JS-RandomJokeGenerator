let joke=document.getElementById("joke");
let btn=document.getElementById("btn");

btn.addEventListener("click",async function(){
    btn.innerHTML=`<div class="loader"></div>`;
    joke.classList.remove("fade");
    try{
        
        const responsive=await   fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");
        if (!responsive.ok) throw new Error("Invalid");
        const data=await responsive.json();
        console.log(data);
        joke.classList.add("fade");
        joke.innerText=data.joke;
    }
    catch(error){
        console.log(error);
    }
    finally{
        btn.innerHTML=`Get Random Joke`;
    }
})