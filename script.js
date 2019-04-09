function myFunction() {
    // Récuperation des variables
    var pointure = document.getElementById("pointure").value;
    var naissance = document.getElementById("naissance").value;
    // Calcule
    var resultat = ((((pointure*2)+5)*50)-naissance)+1766;
    alert("pointure: " + pointure + "\nnaissance: " + naissance + "\nresultat  : " + resultat);
} // fin de fonction