$(function () {
    $(".inputBusca #cdg").keyup(function (e) { 
        var texto = $(this).val();
        console.log(texto);
        // $(".item").removeClass("invisible");
        $(".item").css("display", "table-row");
        $(".item").each(function(){
            if($(this).text().toUpperCase().indexOf(texto.toUpperCase()) < 0)
               $(this).css("display", "none");
            //(this).addClass("invisible");
        });
        
    });
});