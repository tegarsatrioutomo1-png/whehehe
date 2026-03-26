let page = 0;
let music = document.getElementById("music");
let typingInterval;
let isTyping = false; 
let queueNext = false;

let texts = [
    "Hai Muti... 💕",
    "Hari ini hari spesialmu, dan aku ingin kamu bahagia 🎂",
    "Setiap senyummu selalu bikin hatiku hangat 🥰",
    "Aku bersyukur bisa mengenalmu, bahkan setiap detik terasa indah...",
    "Kamu itu rumahku, tempat aku merasa nyaman 💖",
    "Aku ingin selalu ada di sisimu, menemanimu melalui hari-hari terbaik dan tersulit...",
    "Jika suatu hari kamu merasa lelah, ingatlah aku selalu mendukungmu 🌸",
    "Aku janji akan selalu menyayangimu, selamanya...",
    "Kamu adalah hadiah terindah yang pernah aku terima 🎁",
    "Happy Birthday Muti 🎂💖\nAku sayang kamu lebih dari kata-kata bisa ungkapkan."
];

let gifs = ["gif1.webp","gif2.webp","gif3.webp"];
let lastSlide = texts.length - 1;

// ===== PASSWORD =====
function checkPassword(){
    let pass = document.getElementById("password").value;
    if(pass==="0404"){
        document.getElementById("login").style.display="none";
        document.getElementById("main").classList.remove("hidden");
        music.volume=0.2;
        music.play().catch(()=>{});
        createEffects();
        updateSlide();
        animateBackground();
    } else alert("Password salah 😢");
}

// ===== BACKGROUND GRADIENT ANIM =====
function animateBackground(){
    let colors = ["#ffc0cb","#ff69b4","#ff1493","#ffb6c1"];
    let i=0;
    setInterval(()=>{
        document.body.style.background = `linear-gradient(135deg, ${colors[i]}, ${colors[(i+1)%colors.length]})`;
        i = (i+1)%colors.length;
    },10000);
}

// ===== UPDATE SLIDE =====
let img = document.getElementById("photo");
function updateSlide(){
    fadeGif(page);
    typeLettersBeat(page);
}

function fadeGif(index){
    img.style.opacity=0;
    img.src=gifs[index%gifs.length];
    img.style.transform="scale(1.05) rotate(1deg)";
    setTimeout(()=>{img.style.opacity=1; img.style.transform="scale(1) rotate(0deg)";},100);
}

// ===== TYPING =====
function typeLettersBeat(index){
    clearTimeout(typingInterval);
    let display=document.getElementById("text");
    display.innerHTML="";
    let text=texts[index];
    let i=0;
    isTyping=true;
    queueNext=false;

    function typeNext(){
        if(i<text.length){
            display.innerHTML+=text[i];
            spawnEffectUltimate();
            i++;
            typingInterval=setTimeout(typeNext,120);
        } else {
            isTyping=false;
            if(queueNext){ nextSlideAfterTyping(); }
            if(index===lastSlide){ triggerEndingCinematic(); }
        }
    }
    typeNext();
}

// ===== NAV BUTTONS =====
function nextPage(){
    if(isTyping){
        clearTimeout(typingInterval);
        document.getElementById("text").innerHTML=texts[page];
        isTyping=false;
        queueNext=true;
    } else { nextSlideAfterTyping(); }
}

function nextSlideAfterTyping(){
    if(page<texts.length-1){
        page++;
        updateSlide();
    }
}

function prevPage(){
    if(isTyping){ 
        clearTimeout(typingInterval);
        document.getElementById("text").innerHTML=texts[page];
        isTyping=false;
        queueNext=false;
    } else if(page>0){ page--; updateSlide(); }
}

// ===== EFFECTS =====
function spawnEffectUltimate(){
    let container=document.querySelector(".effects");
    let e=document.createElement("span");
    e.innerHTML=Math.random()<0.5?"💖":"✨";
    e.style.left=Math.random()*100+"%";
    e.style.fontSize=(Math.random()*25+15)+"px";
    e.style.color=`hsl(${Math.random()*360},100%,70%)`;
    container.appendChild(e);
    setTimeout(()=>{ e.remove(); },3000);
}

function toggleMusic(){ if(music.paused){ music.play(); } else{ music.pause(); } }

function createEffects(){
    let container=document.querySelector(".effects");
    setInterval(()=>{ 
        let e=document.createElement("span"); 
        e.innerHTML=Math.random()<0.5?"💖":"✨"; 
        e.style.left=Math.random()*100+"%"; 
        e.style.fontSize=(Math.random()*25+15)+"px"; 
        e.style.color=`hsl(${Math.random()*360},100%,70%)`; 
        container.appendChild(e); 
        setTimeout(()=>{e.remove();},6000); 
    },300);
}

// ===== ENDING CINEMATIC =====
function triggerEndingCinematic(){
    let ending = document.createElement("div");
    ending.id="endingText";
    ending.innerHTML="Aku Sayang Kamu Selamanya 💖";
    document.body.appendChild(ending);
    setTimeout(()=>{
        ending.style.transform="translateX(-50%) scale(1)";
        ending.style.opacity="1";
        // confetti jatuh lebih banyak
        for(let i=0;i<100;i++){ setTimeout(spawnEffectUltimate, i*80); }
    },500);
}