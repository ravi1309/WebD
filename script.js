let themes=document.querySelectorAll("input[name='theme']");
const URL="https://api.tvmaze.com/search/shows?q=";

themes.forEach((demo)=>{

    demo.addEventListener('click',(e)=>{

        if(e.target.id==="black")
            document.querySelector(".search-pan h1").style.color="white";
        else
            document.querySelector(".search-pan h1").style.color="black";
        document.querySelector(":root").style.setProperty('--main-col',demo.id);
        localStorage.setItem('color',demo.id);
    });
});
window.addEventListener('load',()=>{

    let themeC=localStorage.getItem('color');
    document.querySelector(":root").style.setProperty('--main-col',themeC);
    let check=document.getElementById(themeC);
    check.checked=true;
});
btn=document.getElementById("sit");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let to_search=document.getElementById("sl").value;
    document.getElementById("sl").value="";
    fetch(URL+to_search).then((res)=>{

        return res.json();
    }).then((data)=>{

        displayI(data);
    })
});

function displayI(data){
    data.forEach((demo)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",demo.show.image.original);
        img.setAttribute("width","250px");
        img.setAttribute("height","250px");
        div.appendChild(img);
        div.className="image";
        document.getElementById("add").appendChild(div);
    });
}