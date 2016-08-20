var controller = (function() {
   'use strict';
   var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
   var botao = document.querySelector("#submeterFormulario");
   var erros = [];
   return{
      submeterFormulario: function(){

         if(this.validarFormulario()){
            alert("Cadastro realizado com sucesso!");

            this.limparFormulario();
         }
      },
      limparTabela : function(){
         document.querySelector('tbody').innerHTML = "";
      },
      limparFormulario: function(){
        var informacoes = document.cadastro;

         if(informacoes.value != ""){
            informacoes.nome.value = "";
            informacoes.sobrenome.value = "";
            informacoes.email.value = "";
            informacoes.dataNascimento.value = "";
            informacoes.optionsRadios[0].checked = false;
            informacoes.optionsRadios[1].checked = false;
         }
      },

      tabelaDeErros : function(erros){
         var todosErros = "";
         var mensagem = "<tr><th class='success'>" + "Erros no cadastro" + "</th></tr>";
         for(var i in erros){

            var linhaErro = "<tr><td class='info'>" + erros[i] + "</td></tr>";
            todosErros += linhaErro;
         }


          if(erros.length > 0){
            var tabelaDeErros = document.querySelector("tbody");
            tabelaDeErros.innerHTML += mensagem;
            tabelaDeErros.innerHTML += todosErros;
         }
      },
      validarFormulario: function(){
         var informacoes = document.cadastro;
         erros = [];
         this.limparTabela();
         this.validarNome(informacoes.nome.value, erros);
         this.validarSobrenome(informacoes.sobrenome.value, erros);
         this.validarEmail(informacoes.email.value, erros);
         this.validarDataNascimento(informacoes.dataNascimento.value, erros);
         this.validaEscolha(informacoes.optionsRadios, erros);
         if (erros.length > 0){
            this.tabelaDeErros(erros);
            return false;
         }else{
            return true;
         }
      },
      validarNome: function(nome, erros){
         if(! nome || nome == ''){
            erros.push("Nome deve ser preenchido!");
         }
      },
      validarSobrenome: function(sobrenome, erros){
         if (!sobrenome || sobrenome == ''){
            erros.push("Sobrenome deve ser preenchido!");
         }
      },
      validarDataNascimento: function(dataNascimento, erros){
         if(!dataNascimento || dataNascimento == ''){
            erros.push("Data de nascimento deve ser preenchido!");
         }
      },
      validaEscolha: function(escolha, erros){
         if (! escolha[0].checked && ! escolha[1].checked){
            erros.push("Opção deve ser preenchido!");
         }
      },
       validarEmail: function(email, erros){
         if(! emailRegex.test(email)){
            erros.push("Email inválido!");
         }
       }
   };
})();

