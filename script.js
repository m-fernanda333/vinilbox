/*Var*/
var novomodo = document.querySelector("#novomodo");

/* Função modo noturno|leitura 
Alteração dinamica de cores e logotipo para diversos itens da composição do site */
novomodo.onclick = function(){

		var faixaI = document.querySelector("#faixaI");
			faixaI.style.backgroundColor = "#363636";

		var boxI = document.querySelector("#boxI");
			boxI.style.backgroundColor = "#A9A9A9";

		var body = document.querySelector("body");
			body.style.backgroundColor = "#B8B8B8";

		var area1 = document.querySelector("#area1");
			area1.style.border = "0px solid #363636";
			area1.style.backgroundColor = "#363636";

		
		var logo = document.querySelector("#logo");
			logo.style.display = "none"; // removendo do display

		var logonoturno = document.querySelector("#logonoturno");
			logonoturno.style.display = "block"; // retornando ao display

		
		var blocodetitulo = document.querySelector(".blocodetitulo");
			blocodetitulo.style.color = "#FFFAFA";
			blocodetitulo.style.backgroundColor = "#171717";

		var infotext = document.querySelector(".infotext");
			infotext.style.backgroundColor = "#171717";
		
		var texto = document.querySelector(".texto");
			texto.style.color = "#FFFAFA";

		var menudnv = document.querySelector("#menudnv");
			menudnv.style.backgroundColor = "#A9A9A9";
};

var modo = document.querySelector("#modo");

modo.onclick = function(){
	window.location.reload();
};



// Confirmação para o usuário que o formulário foi enviado || a validação dos dados ocorreu pela inclsusão de "required" no HTML
var btnenviar1 = document.querySelector("#btnenviar1");

btnenviar1.onclick = function(){
		if(document.formcontato.nome.value!='' && document.formcontato.email.value !='' &&   document.formconato.texto.value!=''){
		alert("Mensagem Enviada Com Sucesso!");	
	}
		else {
			alert("Favor preecher todos os campos!");
		}
	
	};

// Alteração de interativa de texto
var js1 = document.querySelector(".js1");

js1.onclick = function(){

	if (js1.textContent == ' Quem Somos Nós? ') {
				js1.textContent = 'M. Fernanda Pinheiro';
			}
else {
	 if (js1.textContent == 'M. Fernanda Pinheiro') {
	 	js1.textContent = ' Quem Somos Nós? ';
	 }
}
};

var js2 = document.querySelector("#js2");
js2.onclick = function(){
	
	if (js2.textContent == 'Localização') {
				js2.textContent = 'Barbacena - MG';
	}
	else {
	 		if (js2.textContent == 'Barbacena - MG') {
	 		js2.textContent = 'Localização';
	 }
}

};

