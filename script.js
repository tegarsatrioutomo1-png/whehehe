body{
    margin:0;
    font-family:sans-serif;
    overflow:hidden;
    background:linear-gradient(135deg,#ff9ecf,#ff6aa9);
}

/* HIDDEN */
.hidden{ display:none; }

/* LOGIN */
#login{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background:rgba(255,255,255,0.7);
    padding:30px;
    border-radius:20px;
    text-align:center;
}

/* GIF */
.gif-bg{
    position:fixed;
    top:8%;
    left:50%;
    transform:translateX(-50%);
}
.gif-bg img{
    max-width:70%;
}

/* TEXT BOX */
.text-overlay{
    position:fixed;
    bottom:10%;
    left:50%;
    transform:translateX(-50%);
    width:90%;
    max-width:400px;
    padding:20px;
    border-radius:20px;
    background:rgba(255,255,255,0.7);
    text-align:center;
    animation:floatBox 4s ease-in-out infinite;
}

/* FLOAT */
@keyframes floatBox{
    0%{transform:translateX(-50%) translateY(0);}
    50%{transform:translateX(-50%) translateY(-10px);}
    100%{transform:translateX(-50%) translateY(0);}
}

/* TEXT */
#text{
    font-size:18px;
    line-height:1.5;
}

/* BUTTON */
button{
    margin:10px;
    padding:12px 20px;
    font-size:16px;
    border:none;
    border-radius:15px;
    background:pink;
}

button:active{
    transform:scale(0.9);
}

/* EFFECT */
.effects span{
    position:absolute;
    animation:fall 5s linear;
}
@keyframes fall{
    from{top:-10%;}
    to{top:110%;}
}

/* MOBILE FIX */
@media(max-width:600px){
    .text-overlay{width:95%;}
    #text{font-size:17px;}
    button{font-size:15px;}
}

/* TAP SMOOTH */
*{ -webkit-tap-highlight-color: transparent; }
