function calcul() {
    // Récuperation des variables
    let shoeSize = document.getElementById('shoeSize').value;
    let yearOfBirth = document.getElementById('yearOfBirth').value;
    // Calculer des multiplications, etc...
    resultat = ((((shoeSize * 2) + 5) * 50)-yearOfBirth) + 1766;
    // Verifier que les deux chiffres étaient saisies et quelles sont de nombre
    // je mets la condition de faire le calcul seulement si la saisie était faite corecte: si une valeure était introduites et si elle est un chiffre
    if (!shoeSize || !yearOfBirth || isNaN(shoeSize) || isNaN(yearOfBirth)) {
        alert('Merci de n\'entrer que des ciffres...');
    } else {
        alert(resultat);
    }
}