function calcul_moyenne(){
    var n1= prompt("Donner la première note");
    var n2= prompt("Donner la deuxième note");
    var n3= prompt("Donner la troisème note");
   
    var somme = Number(n1)+Number(n2)+Number(n3);

    document.write("Voici la somme: " +somme+ "<br>");
    var moyenne= somme/3;


    document.write("Voici la moyenne:" + moyenne+ "<br>");

    if (moyenne >= 10)
    document.write("Vous êtes admis")
     else
    document.write("Vous n'êtes pas admis")

}


function  test_age(){
    var age1 = prompt("Donner votre âge")
    
    if (age1  >= 18){
    document.write("Vous êtes majeur")
    document.bgColor= "green"
}
    else{
    document.write("Vous êtes mineur")
    document.bgcolor="red"
    }
}
   
function simple_affichage(){
    var nom= prompt("Donner votre nom")
    var prenom= prompt("Donner votre prénom")

    document.write("Vous vous appelez: <br> "+ nom + " "  + prenom)

}


function test_couleur(){
 let c = prompt("Donner votre couleur")

    if (c == "rouge" || c == "ROUGE" || c == "R");
    document.body.style.background = "red"
    if (c == "vert" || c == "VERT" || c == "V");
    document.body.style.background = "green"


}