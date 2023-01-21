
var a = Number(prompt("Saisir la valeur de A"));
var b = Number(prompt("Saisir la valeur de B"));
if (confirm("voulez vous vraiment faire cette opération?")){
    if (!(Number.isInteger(a) && Number.isInteger(b))){
        alert("Vous n'avez pas saisi des nombres");
    }
    else{
        alert(a+b);
    }
    
}

