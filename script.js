window.onload = function() {
    var btPessoa = document.getElementById("sendPessoa")
    var btProduto = document.getElementById("sendProduto")

    btPessoa.onclick = salvarNome;
    btProduto.onclick = salvarProduto;
};

function salvarNome() {
    var inputPessoa = document.getElementById("nome");
    var inputEndereco = document.getElementById("endereco");
    var inputNumero = document.getElementById("numero");
    var nome = inputPessoa.value;
    var endereco = inputEndereco.value;
    var numero = inputNumero.value;

    localStorage.setItem("Nome", nome);
    localStorage.setItem("Endereco", endereco);
    localStorage.setItem("Numero", numero);
};

function salvarProduto() {
    var inputProduto = document.getElementById("produto");
    var inputTipo = document.getElementById("type");
    var produto = inputProduto.value;
    var tipo = inputTipo.value;

    localStorage.setItem("Produto", produto);
    localStorage.setItem("Tipo", tipo);
};


//  tags tags
//const Enviar = (props) => {

//     const [nome, setNome, endereco, setEndereco] = useState();
  
//     const Armazenar = (chave, valor, chave, valor) => {
//       localStorage.setItem(chave, valor, chave, valor);
//     }

//     function Guardar() {
//         Armazenar('name', nome, 'endereco', endereco)
//     }
// };
