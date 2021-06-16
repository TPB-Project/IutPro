$(document).ready(function() {
	$("form").submit(function(event) {

        

		var modele = /\S+@\S+\.\S+/;
		var mail = document.getElementById("mail").value;

		if (modele.test(mail) == false) {
            event.preventDefault();
            $("input").addClass("erreur");
			$("input").focus();
            $(".case").addClass("erreur");
		}else{
            $("form").submit();
        }
		
		
	});
});  