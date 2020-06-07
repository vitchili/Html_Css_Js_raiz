var motivo1 = `<h1>Criatividade:</h1>
<p>Entendo que o mercado é multimodal e todo conhecimento
pode ser aplicável para ajudar no desenvolvimento da empresa.</p>
<p>Para isso, usarei toda criatividade interdisciplinar 
para pensar em algo ainda não proposto!</p>
<input type="button" value="~Clique aqui" onclick="geraImgJob()">`

var motivo2 = `<h1>Comprometimento</h1>
<p>O comprometimento é um item básico a se esperar de qualquer
funcionário de uma instituição.</p>
<p>Para otimizar meu foco, decidi abrir mão de um cargo público para dedicar 
100% aos aprendizados no estágio.</p>
<input type="button" value="~Comprometido" onclick="geraImgComprometimento()">`

var motivo3 = `<h1>Bom relacionamento</h1>
<p>Sei que o ambiente de trabalho pode ser estressante
conforme as cobranças e prazos da empresa.</p>
<p>Entretanto, me esforçarei para um bom relacionamento
interpessoal na equipe e uma ótima produtividade conjunta.</p>
`
var motivo4 = `<h1>Norma culta do português</h2>
<p>O português normativo é necessário para uma formalização
dos documentos e reuniões.</p>
<p>Anos atrás, cursei 3 semestres de Letras (Português) com habilitação
em Edição de Texto. Tive a oportunidade de estagiar 
na área e revisar documentos e redações por um ano.</p>
<input type="button" value="->" onclick="geraImgPt()">`

var motivo5 = `<h1>Design</h1>
<p>Por mais que o estágio não seja de design propriamente
dito, esse tipo de conhecimento pode ser ótimo para prototipar dezenas de projetos.</p>
<p>Na outra pasta do portfólio eu mostro minhas interfaces desenvolvidas, projetos de modelagem,
gráficos, animações e edições!</p>
<input type="button" value="~Check design" onclick="geraImgDesign()">`

var motivo6 = `<h1>Detalhe</h1>
<p>Na verdade essa é só uma demonstração de manipulação de página
com o JS. A seriedade e o respeito sempre vêm em primeiro lugar.</p>
<p>Contrate o Vitor!</p>`

function botao(qualBotao){
    switch(qualBotao){
        case 1: divInterativa1.innerHTML = `${motivo1}`
        break;
        case 2: divInterativa2.innerHTML = `${motivo2}`
        break;
        case 3: divInterativa3.innerHTML = `${motivo3}`
        break;
        case 4: divInterativa4.innerHTML = `${motivo4}`
        break;
        case 5: divInterativa5.innerHTML = `${motivo5}`
        break;
        case 6: divInterativa6.innerHTML = `${motivo6}`;
                var img = document.createElement('img')
                img.setAttribute('src','imagens/fogos.png')
                imgInterativa6.appendChild(img)
        break;
    }
}
function geraImgJob(){
        var img = document.createElement('img')
        img.setAttribute('src','imagens/giveMeAjob.png')
        imgInterativa1.appendChild(img)
}
function geraImgComprometimento(){
        var img = document.createElement('img')
        img.setAttribute('src','imagens/comprometimento.png')
        imgInterativa2.appendChild(img)
}
function geraImgPt(){
    var img = document.createElement('img')
    img.setAttribute('src','imagens/pt.png')
    imgInterativa3.appendChild(img)
}
function geraImgDesign(){
        var img = document.createElement('img')
        img.setAttribute('src','imagens/color.png')
        imgInterativa5.appendChild(img)
}

