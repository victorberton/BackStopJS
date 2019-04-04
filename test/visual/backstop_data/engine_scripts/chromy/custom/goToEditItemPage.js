module.exports = function (chromy) {
  chromy
    .wait(".item-view") //aguarda elemento
    .click(".item-view") // após elemento ser carregado, click
    .wait(".update-button") // espera outro elemento com a classe update-button
    .click(".update-button") // após ser carregado, click
    .wait("form"); //espera que elemento do tipo form seja exibido
};
