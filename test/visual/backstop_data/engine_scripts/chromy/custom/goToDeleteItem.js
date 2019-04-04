module.exports = function (chromy) {
  chromy
    .wait(".delete-button a") //aguarda elemento carregar
    .click(".delete-button a") // ação de click após ser carregado no passo anterior
    .wait(".delete-item-confirmation") //aguarda elemento ser carregado
    .click("#deleteYes") // após ser carregado ação de click
};
