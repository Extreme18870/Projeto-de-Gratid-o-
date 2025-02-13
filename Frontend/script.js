// Atribuindo as variáveis:

const imagens = document.querySelectorAll ("#slider section");
let imagemAtual = 0;
let bolinhas = document.getElementsByClassName("bolinhas");

// Função para mostrar a imagem:

function mostrarImagem(index) {
  imagens.forEach((section) => (section.style.display = "none"));
  imagens[index].style.display = "block";

  let i
  for (i = 0; i < bolinhas.length; i++) {
        bolinhas[i].className = bolinhas[i].className.replace(" ativo", "");
      } 
        bolinhas[imagemAtual].className += " ativo";
}

// Funções de proxImagem e anteImagem:

function proximaImagem() {
  imagemAtual = (imagemAtual + 1) % imagens.length;
  mostrarImagem(imagemAtual);
}

function imagemAnterior() {
  imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
  mostrarImagem(imagemAtual);
}   

// Chama a função para mostrar a imagem:
mostrarImagem(imagemAtual);

// Atribui para as variáveis os botões do index por ID:
const botaoProximo = document.getElementById("proximo");
const botaoAnterior = document.getElementById("anterior");


// Permite que o botao "escute" o click e chama a função:
botaoProximo.addEventListener("click", () => {
  proximaImagem();
  
});

botaoAnterior.addEventListener("click", () => {
  imagemAnterior();
});

// Seta um intervalo para passar as imagens (3s):

let intervalo = setInterval(proximaImagem, 3000)

// Funções que traduzem para Inglês ou PT-BR (são chamadas pelo botão no index):

function traduzirIngles(){

document.getElementById("titulo1").textContent = `CONCEPT`
document.getElementById("paragrafo1").textContent = `Gratitude is a feeling of recognition and an emotion of wanting 
to thank another individual for taking an action, providing assistance, or doing a favor without expecting anything in return. 
This attitude generates joy for the person receiving help and also for the one who performed the action, bringing satisfaction.
 Gratitude also produces a range of other feelings, such as love, loyalty, friendship, health, and wisdom. Gratitude is a noble 
 feeling that, when genuinely felt, brings a sense of well-being.`

document.getElementById("titulo2").textContent = `RELATION`
document.getElementById("paragrafo2").textContent = `Thanksgiving Day is a commemorative holiday, most popular 
in the United States, celebrated every year on the fourth Thursday of November. "Thanksgiving" means to give thanks, 
and this is a day of gratitude where families gather to celebrate the harvest and also reflect on the good things that 
happened throughout the year. Gratitude is central to this celebration because the families coming together practice 
giving thanks for their achievements, health, family, friends, and the blessing of life. During the feast, people share 
what they value most and express gratitude for what they have. This holiday inspires people to practice gratitude through 
words and acts of kindness.`
}

function traduzirBrasil(){

document.getElementById("titulo1").textContent = `CONCEITO`
document.getElementById("paragrafo1").textContent = ` A gratidão é um sentimento de reconhecimento e uma emoção de querer agradecer outro indivíduo 
por ele ter feito alguma ação, auxílio ou favor sem esperar algo em troca. Essa atitude gera 
alegria para quem está recebendo ajuda e também para a pessoa que realizou a ação, trazendo assim 
satisfação. A gratidão também produz uma série de outros sentimentos como: amor, fidelidade, amizade, 
saúde e sabedoria. A gratidão é um sentimento nobre que quando é sentido genuinamente, traz a sensação 
de bem estar. `
  
document.getElementById("titulo2").textContent = `RELAÇÃO`
document.getElementById("paragrafo2").textContent = ` O Thanksgiving Day (Dia de Ação de Graças), é uma data comemorativa, mais popular nos Estados Unidos, 
que é celebrada todos os anos na 4ª quinta feira de Novembro. Em inglês, “thanksgiving” significa 
agradecer, e esse é um dia de agradecimento em que as famílias se reúnem e celebram a colheita e também 
recordam as coisas boas que aconteceram ao longo do ano. A gratidão é fundamental para essa celebração 
porque as famílias reunidas têm a prática de agradecer pelas suas conquistas, pela saúde, pela família, 
pelos amigos e pela benção da vida. Durante a ceia, as pessoas compartilham o que mais valorizam e 
agradecem aquilo que possuem. Essa data comemorativa inspira as pessoas a praticarem a gratidão por meio 
de palavras e gestos de bondade. `
  }