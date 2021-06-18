var img, img2, img3, img4, img5,canvas, ctx, ALTURA, LARGURA, frames = 0, //variaveis criadas

// ESPAÇO PARA O CHAO	00
// ESPAÇO PARA O CHAO	00
// ESPAÇO PARA O CHAO	00




chao ={
x:0, // localização  x do choa
y: 290, //localização y do chao
altura:30, // altura do chao
cor:"black",
		desenha: function(){
ctx.fillStyle = this.cor;
ctx.fillRect(this.x, this.y, LARGURA, this.altura);
}},
chaodois={

x:0, y:145, altura:30, largura:LARGURA, cor:"black", 

		desenha: function(){
			//spriteBoneco5.desenha(this.x,	this.y);
ctx.fillStyle = this.cor;
ctx.fillRect(this.x, this.y, LARGURA, this.altura);
}
},
chaotres={

x:0, y:435, altura:30, largura:50, cor:"black", 

		desenha: function(){
ctx.fillStyle = this.cor;
ctx.fillRect(this.x, this.y, LARGURA, this.altura);
}
},
chaoquatro={

x:0, y:555, altura:50, largura:30, cor:"black", 

		desenha: function(){
ctx.fillStyle = this.cor;
ctx.fillRect(this.x, this.y, LARGURA, this.altura);
}
},




/*blocodois={
x:0, y:200, altura:50, largura:50, cor:"black", gravidade:1.5,velocidade:0,maxPulos:6, ForcaDoPulo:122, qntPulos:0,

		desenha:function()
{
ctx.fillStyle = this.cor;
ctx.fillRect(this.x,	this.y,	this.largura, this.altura);
},
		proporcao:function(){
this.velocidade =+ this.gravidade;
this.x += this.velocidade;
},
		atualiza:function()
{


if(this.y > chaodois.y - this.altura)
{
this.y = chao.y - this.altura;
this.qntPulos=0;
}},
		atualiza:function()
{


if(this.y > chao.y - this.altura)
{
this.y = chao.y - this.altura;
this.qntPulos=0;
}},  // funcao atualiza fecha


		pula:function(){
if(this.qntPulos < this.maxPulos)
{
this.velocidade = -this.ForcaDoPulo;
this.qntPulos++;
}
}},*/
blocodois={x:0, y:70, altura:spriteBoneco.altura, largura:spriteBoneco.largura, cor:"red", gravidade:35,velocidade:0,
maxPulos:2, ForcaDoPulo:10, qntPulos:0, 
		desenha: function()
{
	spriteBoneco.desenha(this.x,this.y);
//ctx.fillStyle = this.cor;
//ctx.fillRect(this.x, this.y, this.largura, this.altura); // localização e posição do bloco em x, y
},	//funcao desenha fecha, já declarada, recebe essas coisas

		proporcao:function(){


this.x += LARGURINHA;

},

		atualiza:function()
{


if(this.y > chao.y - this.altura)
{
this.y = chao.y - this.altura;
this.qntPulos=0;
}},  // funcao atualiza fecha


		pula:function(){
if(this.qntPulos < this.maxPulos)
{
this.velocidade = -this.ForcaDoPulo;
this.qntPulos++;
}
}},

blocotres={x:0, y:360, altura:spriteBoneco.altura, largura:spriteBoneco.largura, cor:"red", gravidade:35,velocidade:0,
maxPulos:2, ForcaDoPulo:10, qntPulos:0, 
		desenha: function()
{
	spriteBoneco3.desenha(this.x,this.y);
//ctx.fillStyle = this.cor;
//ctx.fillRect(this.x, this.y, this.largura, this.altura); // localização e posição do bloco em x, y
},	//funcao desenha fecha, já declarada, recebe essas coisas

		proporcao:function(){
this.x += LARGURINHA;
},

		atualiza:function()
{


if(this.y > chao.y - this.altura)
{
this.y = chao.y - this.altura;
this.qntPulos=0;
}},  // funcao atualiza fecha


		pula:function(){
if(this.qntPulos < this.maxPulos)
{
this.velocidade = -this.ForcaDoPulo;
this.qntPulos++;
}
}},

blocoquatro={x:0, y:480, altura:spriteBoneco4.altura, largura:spriteBoneco4.largura, cor:"red", gravidade:35,velocidade:0,
maxPulos:2, ForcaDoPulo:10, qntPulos:0, 
		desenha: function()
{
	spriteBoneco4.desenha(this.x,this.y);
//ctx.fillStyle = this.cor;
//ctx.fillRect(this.x, this.y, this.largura, this.altura); // localização e posição do bloco em x, y
},	//funcao desenha fecha, já declarada, recebe essas coisas

		proporcao:function(){


this.x += LARGURINHA;

},

		atualiza:function()
{


if(this.y > chao.y - this.altura)
{
this.y = chao.y - this.altura;
this.qntPulos=0;
}},  // funcao atualiza fecha


		pula:function(){
if(this.qntPulos < this.maxPulos)
{
this.velocidade = -this.ForcaDoPulo;
this.qntPulos++;
}
}},


/*nuvem={

x:300, y:30, altura:spritenuvem.altura, largura:spritenuvem.largura, cor:"black",
desenha:function(){
spriteBoneco.desenha(this.x,this.y);
}
},
*/

bloco={
x:0, y:250, altura:spriteBoneco.altura, largura:spriteBoneco.largura, cor:"red", gravidade:35,velocidade:0,
maxPulos:2, ForcaDoPulo:10, qntPulos:0, 
		desenha: function()
{
//ctx.fillStyle = this.cor;
//ctx.fillRect(this.x, this.y, this.largura, this.altura); // localização e posição do bloco em x, y

spriteBoneco2.desenha(this.x,this.y);
},	//funcao desenha fecha, já declarada, recebe essas coisas

		colocar:function(){


this.x += LARGURINHA;

},

		atualiza:function()
{


if(this.y > chao.y - this.altura)
{
this.y = chao.y - this.altura;
this.qntPulos=0;
}},  // funcao atualiza fecha


		pula:function(){
if(this.qntPulos < this.maxPulos)
{
this.velocidade = -this.ForcaDoPulo;
this.qntPulos++;
}
}}








 // funcao pula fecha
/*obtaculos = {

_obs:[],
cor: ["green"],
inserir: function(){
this._obs.push({

x: LARGURA,
largura:30 + Math.floor(21 * Math.random()),
altura: 30 + Math.floor(100 * Math.random()),

})
}*/// funcao inserir obstaculos
;



function funcaoplacar(){

var n1 = parseInt(document.getElementByid('andabloco').value);
if(n1>11){
n1=0;
}
alert(n1 + 1);

}



// fecha bloco
	var nomebloco;
function anunciar(anuncio){
nomebloco= prompt("Digite o nome da Primeira Equipe: ");
if(nomebloco != null){

nomebloco = document.getElementByid("idnomeequipe1");
}
}
	var nomeblocotres;
function anunciar3(anuncio3){
nomeblocotres= prompt("Digite o nome da Terceira Equipe: ");
if(nomeblocotres != null){

nomeblocotres = document.getElementByid("idnomeequipe1");

}

}
var nomeblocodois; 
function anunciar2(anuncio2){
nomeblocodois = prompt("Digite o nome da Segunda Equipe:");

if(nomeblocodois != null){

document.getElementByid("idnomeequipe2");

}
}
var nomeblocoquatro; 
function anunciar4(anuncio4){
nomeblocoquatro = prompt("Digite o nome da Quarta Equipe:");

if(nomeblocoquatro != null){

document.getElementByid("idnomeequipe4");

}
}
function somarESC3(){
var pegarinputblocoquatro = parseInt(document.getElementById('placar4').value);
document.getElementById('placar4').value = pegarinputblocoquatro +1;
}

function somarDIR(){
var pegarinputblocodois = parseInt(document.getElementById('placar2').value);
document.getElementById('placar2').value =  pegarinputblocodois +1;

}

function somarESC(){
var pegarinputbloco = parseInt(document.getElementById('placar1').value);
document.getElementById('placar1').value = pegarinputbloco +1;

}
function somarESC2(){
var pegarinputblocotres = parseInt(document.getElementById('placar3').value);
document.getElementById('placar3').value = pegarinputblocotres +1;

}

		function clique(event)
{}
/*function  contarplacar(){

var contarplacarbloco = document.querySelector('contarbloco').addEventListener('click', function(){
  var numerobloco = parseInt(contarplacarbloco.textContent) + 1;
 contarplacarbloco.textContent = numerobloco;
contarplacarblocodois =document.querySelector('contarblocodois');

if(blocodois.x>LARGURA){
contarplacarbloco = 0;

}



}*/
function sairtudo(){
	document.querySelector('.popup-wrapper5').style.display="none";
	document.querySelector('.popup-wrapper4').style.display="none";
	document.querySelector('.popup-wrapper3').style.display="none";
	document.querySelector('.popup-wrapper2').style.display="none";
}
function volta3(){

document.querySelector('.popup-wrapper3').style.display="block";
document.querySelector('.popup-wrapper4').style.display="none";


}
function volta5(){

document.querySelector('.popup-wrapper3').style.display="none";
document.querySelector('.popup-wrapper5').style.display="block";


}
function volta2(){
document.querySelector('.popup-wrapper2').style.display="block";
document.querySelector('.popup-wrapper5').style.display="none";


}
function voltartudo(){
document.querySelector('.popup-wrapper4').style.display="none";
document.querySelector('.popup-wrapper3').style.display="none";
document.querySelector('.popup-wrapper2').style.display="none";

}

function alternativasgo(){
	var textpergunta2 = document.querySelector(".inputpergunta2").value;
document.querySelector('.popup-wrapper3').style.display="none";
document.querySelector('.popup-wrapper4').style.display="block";
var lac2 = document.querySelector("#mudaralternativas2");
lac2.innerHTML = textpergunta2;


}

function perguntafeita(){
var textpergunta = document.querySelector(".inputpergunta").value;
document.querySelector('.popup-wrapper2').style.display="none";
document.querySelector('.popup-wrapper5').style.display="block";

var lac = document.querySelector("#idperguntar");
lac.innerHTML = textpergunta;


}

function perguntafeita3(){
var textpergunta = document.querySelector(".inputpergunta").value;
document.querySelector('.popup-wrapper5').style.display="none";
document.querySelector('.popup-wrapper3').style.display="block";

var lac = document.querySelector("#idperguntar");
lac.innerHTML = textpergunta;


}
function voltar(){

document.querySelector('.popup-wrapper2').style.display="none";

}
function perguntar(){

document.querySelector('.popup-wrapper2').style.display="block";

}
		function main()
{
ALTURA = window.innerHeight;
LARGURA = window.innerWidth;

if(LARGURA >= 600) 
{
	
LARGURINHA = (LARGURA)/9.5;
ALTURA = 585;
}

// cria elemento e dá a largura e altura do canvas(borda)...
canvas = document.createElement("canvas");
canvas.width = LARGURA;
canvas.height = ALTURA;
canvas.style.border = "1px solid #000";

ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
document.addEventListener("mousedown", clique);


img = new Image();
img.src= "spritecarro.png";

img2 = new Image();
img2.src="spritecarro2.png";


img3 = new Image();
img3.src = "spritecarro3.png";


img4 = new Image();
img4.src ="spritecarro4.png";

img5 = new Image();
img5.src ="spriterua.png";

roda();
}
function nometres(){
 var alterartres = querySelector("#idnomeequipe3");
alterartres.innerHTML = nomeblocotres;


}

		function roda() {
atualiza();
desenha();
window.requestAnimationFrame(roda);
}

		function atualiza(){

frames++;
bloco.atualiza();
blocodois.atualiza();

if(blocodois.x>LARGURA)
{
	bloco.x=0;
	blocodois.x=0;

 document.querySelector('.popup-wrapper').style.display="block";
var mostrar = document.querySelector("#nomeequipes");
mostrar.innerHTML = nomeblocodois;
}

if(blocotres.x > LARGURA){
	blocodois.x=0;
	blocotres.x=0;
	  document.querySelector('.popup-wrapper').style.display="block";	
	  var mostrartres = document.querySelector('#nomeequipes');
	  mostrartres.innerHTML = nomeblocotres;

}
if(blocoquatro.x > LARGURA){
	blocodois.x=0;
	blocoquatro.x=0;
	  document.querySelector('.popup-wrapper').style.display="block";
	  var mostrarquatro = document.querySelector('#nomeequipes');
	  mostrarquatro.innerHTML = nomeblocoquatro;
}

if(bloco.x > LARGURA){
	blocodois.x=0;
	bloco.x=0;
	  document.querySelector('.popup-wrapper').style.display="block";
	  var mostrarum = document.querySelector('#nomeequipes');
	  mostrarum.innerHTML = nomebloco;
}
}



		function desenha() {
		

	ctx.fillStyle = "#50beff";
ctx.fillRect(0, 0, LARGURA, ALTURA);
chao.desenha();

bloco.desenha();
blocodois.desenha();
blocotres.desenha();
blocoquatro.desenha();
chaodois.desenha();
chaotres.desenha();
chaoquatro.desenha();
}

main();