var cssStyle=
`.message-popup{
    box-shadow: 5px 5px 10px 6px black;
    width: 700px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 10px;
    z-index: 1000;
    position: absolute;
    left: calc(50% - 350px);
    background-color: white;
    display: block;
}
.message-popup p{
    font-size: x-large;
    font-weight: bold;
}
.success-button{
    background-color: green;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    color: white;
    padding:10px;
    border-radius: 10px;
    font-size: large;
    cursor: pointer;
}
.success-button p{
    margin: 0;
}
.overlay {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
z-index: 99;
display: block;
}`;
var styleElement;

function openPopup(){

    styleElement = document.createElement('style');
    styleElement.textContent = cssStyle;

    document.head.appendChild(styleElement);


    document.body.innerHTML += 
    `<div id="popup-wrapper">
<div id="popup" class = "message-popup">
<img src="success-img.jpg">
<p>
    Uspješno obavljena operacija
</p> 
<div onclick="closePopup()" class="success-button"><p>Zatvori</p></div>
</div>
<div class="overlay" id="overlay"></div>
</div>`;
}
function closePopup(){
    document.getElementById("popup").remove();
    document.getElementById("overlay").remove();
    styleElement.parentNode.removeChild(styleElement);
}