let scrollAmount=0;

function scrollProdutos(direction) {
const productList= document.getElementById('lista-produto');
  const productWidth= productList.children[0].offsetWidth + 20;
  scrollAmount += direction * productWidth;
  productList.scrollTo({
    left:scrollAmount,
    behavior:'smooth'
  });
  
}
