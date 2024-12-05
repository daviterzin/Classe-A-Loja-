let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    let carrinhoElement = document.getElementById('itensCarrinho');
    carrinhoElement.innerHTML = ''; // Limpa a lista de itens

    carrinho.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        carrinhoElement.appendChild(li);
    });

    document.getElementById('totalCarrinho').textContent = total.toFixed(2);
    document.querySelector('header .cart button').textContent = `Carrinho (${carrinho.length})`;
}

function mostrarCarrinho() {
    document.getElementById('carrinho').style.display = 'block';
}

function fecharCarrinho() {
    document.getElementById('carrinho').style.display = 'none';

}

document.getElementById('search-button').addEventListener('click', function () {
    const query = document.getElementById('search-bar').value.trim().toLowerCase();
    
    if (query) {
      // Exemplo: Faça a busca nos produtos (lista fictícia de produtos)
      const products = ['camiseta', 'calça', 'vestido', 'sapato', 'jaqueta'];
      const results = products.filter(product => product.includes(query));
  
      if (results.length > 0) {
        alert(`Produtos encontrados: ${results.join(', ')}`);
      } else {
        alert('Nenhum produto encontrado.');
      }
    } else {
      alert('Por favor, insira um termo de busca.');
    }
    
});
  
document.getElementById("search-button").addEventListener("click", function () {
  const searchQuery = document.getElementById("search-bar").value.toLowerCase();
  const produtos = document.querySelectorAll(".produto");
  
  produtos.forEach(produto => {
      const nomeProduto = produto.querySelector("h3").textContent.toLowerCase();
      
      if (nomeProduto.includes(searchQuery)) {
          produto.style.display = "block"; // Exibe o produto
      } else {
          produto.style.display = "none"; // Oculta o produto
      }
  });
});

document.getElementById("search-bar").addEventListener("input", function () {
  const searchQuery = this.value.toLowerCase();
  const produtos = document.querySelectorAll(".produto");
  
  produtos.forEach(produto => {
      const nomeProduto = produto.querySelector("h3").textContent.toLowerCase();
      
      if (nomeProduto.includes(searchQuery)) {
          produto.style.display = "block";
      } else {
          produto.style.display = "none";
      }
  });
});

document.querySelectorAll('.opcao').forEach(opcao => {
  opcao.addEventListener('click', () => {
  });
});

const destaques = [

];

const container = document.querySelector('.produtos-destaque');
destaques.forEach(produto => {
  const div = document.createElement('div');
  div.classList.add('produto');
  div.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.preco}</p>
      <a href="${produto.link}" class="botao-comprar">Comprar Agora</a>
  `;
  container.appendChild(div);
  const descobertas = [
    { nome: "Produto Exclusivo 1", preco: "R$ 99,90", imagem: "imagens/produto1.jpg", link: "link-produto1" },
    { nome: "Produto Exclusivo 2", preco: "R$ 79,90", imagem: "imagens/produto2.jpg", link: "link-produto2" },
    { nome: "Produto Exclusivo 3", preco: "R$ 59,90", imagem: "imagens/produto3.jpg", link: "link-produto3" },
];

const container = document.querySelector('.produtos-descobertas');
descobertas.forEach(produto => {
    const div = document.createElement('div');
    div.classList.add('produto');
    div.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.preco}</p>
        <a href="${produto.link}" class="botao-comprar">Comprar Agora</a>
    `;
    container.appendChild(div);
});

});

