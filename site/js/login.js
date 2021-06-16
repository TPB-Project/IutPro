$(document).ready(function(){

    $(".button").click(function(event){
        event.preventDefault();
        nb_erreur=0;
        $("input[required]").each(function(index){
            $(this).parents(".case").removeClass("erreur");
            if($(this).val() ==""){
                $(this).parents(".case").addClass("erreur");
                if (nb_erreur==0) $(this).focus();
                nb_erreur=nb_erreur+1;
            }
        });

        if(nb_erreur==0){
            $("form").submit();
        }
    });
});