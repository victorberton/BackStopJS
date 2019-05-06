module.exports = function (chromy) {
  chromy
     .
     .click(".myAccountLinksHeader") // após elemento ser carregado, click
     .wait(".myAccountLinksHeader") // espera outro elemento com a classe update-button
    // .click(".update-button") // após ser carregado, click
    // .wait("form"); //espera que elemento do tipo form seja exibido
};
