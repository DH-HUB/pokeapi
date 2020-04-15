


/* =Navigation réaliste */

	
	$(document).ready(function() {

	/* =Réflection Nav */	
		
		// Ajouter span à chaque LI pour ajouter la réflexion
		
		$("#nav-reflection li").append("<span></span>");	
		
		// Animer les boutons, déplacer la réflexion et estomper
		
		$("#nav-reflection a").hover(function() {
		    $(this).stop().animate({ marginTop: "-10px" }, 200);
		    $(this).parent().find("span").stop().animate({ marginTop: "18px", opacity: 0.25 }, 200);
		},function(){
		    $(this).stop().animate({ marginTop: "0px" }, 300);
		    $(this).parent().find("span").stop().animate({ marginTop: "1px", opacity: 1 }, 300);
		});
	
	});