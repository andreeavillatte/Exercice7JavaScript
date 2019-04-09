function myFunction() {
    // Récuperation des variables
    var pointure = document.getElementById("pointure").value;
    var naissance = document.getElementById("naissance").value;
    // Calcule
    var resultat = ((((pointure*2)+5)*50)-naissance)+1766;
    if (isNaN(pointure) || isNaN(naissance)){
        alert("Merci de n'entrer que des ciffres...");
    } else{
        alert("pointure: " + pointure + "\nnaissance: " + naissance + "\nresultat  : " + resultat);
    }
} // fin de fonction