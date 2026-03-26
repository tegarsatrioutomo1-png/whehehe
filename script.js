let page = 0;

let texts = [
"Hai Muti 💕",
"Hari ini bukan hari biasa...",
"Hari ini adalah hari dimana seseorang yang sangat spesial lahir ke dunia 🌍",
"Dan orang itu adalah kamu 💖",
"Aku bersyukur banget bisa kenal kamu",
"Bisa ketawa bareng kamu",
"Bisa cerita banyak hal sama kamu 💕",
"Kamu itu bukan cuma spesial...",
"Tapi kamu itu berarti banget buat aku 💖",
"Di hari ulang tahun kamu ini 🎂",
"Aku cuma pengen kamu bahagia",
"Selalu tersenyum 😊",
"Dan semua harapan kamu bisa tercapai ✨",
"Aku akan selalu ada buat kamu",
"Di saat kamu senang 😊",
"Dan di saat kamu sedih 😢",
"Terima kasih ya udah hadir di hidup aku 💕",
"Selamat ulang tahun yaa cintaku 💖",
"Aku sayang kamu, hari ini, besok, dan selamanya 💖"
];

let webps = ["gif1.webp","gif2.webp","gif3.webp"];

let music = document.getElementById("music");

/* LOGIN */
function checkPassword(){
    let pass = document.getElementById("password").value;

    if(pass==="0404"){
        document.getElementById("login").style.display="none";
        document.getElementById("main").classList.remove("hidden");

        music.play().catch(()=>{});
        updateSlide();
        createEffects();
    } else{
        alert("Password salah 😢");
    }
}

/* SLIDE */
function updateSlide(){
    document.getElementById("text").innerHTML="";
    document.getElementById("photo").src=webps[page%3];
    typeText();
}

function typeText(){
    let words = texts[page].split(" ");
    let i=0;
    let el=document.getElementById("text");

    let interval=setInterval(()=>{
        if(i<words.length){
            el.innerHTML += "<span class='pulse'>"+words[i]+"</span> ";
            i++;
        } else clearInterval(interval);
    },300);
}

/* NAV */
function nextPage(){
    if(page<texts.length-1){
        page++;
        updateSlide();
    }
}

function prevPage(){
    if(page>0){
        page--;
        updateSlide();
    }
}

/* EFFECT LOVE */
function createEffects(){
    setInterval(()=>{
        let e=document.createElement("span");
        e.innerHTML="💖";
        e.style.left=Math.random()*100+"%";
        document.querySelector(".effects").appendChild(e);
        setTimeout(()=>e.remove(),5000);
    },300);
}

/* MUSIC */
function toggleMusic(){
    if(music.paused) music.play();
    else music.pause();
}

/* GETAR */
function vibrate(){
    if(navigator.vibrate){
        navigator.vibrate(50);
    }
}

/* PARALLAX */
document.addEventListener("touchmove",function(e){
    let x=e.touches[0].clientX;
    let y=e.touches[0].clientY;

    let img=document.getElementById("photo");

    let moveX=(x-window.innerWidth/2)/30;
    let moveY=(y-window.innerHeight/2)/30;

    img.style.transform=`translate(${moveX}px,${moveY}px)`;
});
