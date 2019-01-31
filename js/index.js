/* document.querySelector("#button-about").addEventListener("click", function () {
    window.scrollTo(0, $("#panel-about").offset().top);
});
Exemplo sem animação, mas com js puro
 */
/* $("#button-about").on("click", function () {
    $('html,body').animate({scrollTop: $("section.panel-about").offset().top});
});
 */
$(document).ready(function (){
    $("#button-about").on("click", navegacaoPagina);
    $("#button-speakers").on("click", navegacaoPagina);
    $("#button-subscribe").on("click", navegacaoPagina);
});

var navegacaoComEfeito = function (elementoLinkado) {
    $('html,body').animate({scrollTop: $(elementoLinkado).offset().top}, 1000);
};

var navegacaoPagina = function (event) {
    event.preventDefault();

    var elementoLinkado = $(this).attr("href");

    navegacaoComEfeito(elementoLinkado);
};