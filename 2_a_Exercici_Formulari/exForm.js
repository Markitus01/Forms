document.addEventListener("DOMContentLoaded", main);

function main()
{
    let formulari = document.getElementById("form");

    let elem = "";
    for (let i = 0; i < formulari.elements.length; i++)
    {
        // console.log(formulari.elements[i]);
        // Guardem el nom del element actual a minuscules
        elem = formulari.elements[i].tagName.toLowerCase();
        tipus = formulari.elements[i].type.toLowerCase();
        // console.log(elem);

        // Tractem el formulari depenent l'element que trobem
        switch (elem) {
            case "fieldset":
                console.log("Modificant fieldset");
                formulari.elements[i].style.color = "#2d3436";
                formulari.elements[i].style.backgroundColor = "#00b894";
                break;

            case "input":
                if (tipus == "text")
                {
                    console.log("Modificant input text");
                    formulari.elements[i].style.width = "25vw";
                    formulari.elements[i].style.borderRadius = "10px";
                }
                else if (tipus == "password")
                {
                    console.log("Modificant input password");
                    formulari.elements[i].style.width = "20vw";
                    formulari.elements[i].style.borderRadius = "10px";
                    formulari.elements[i].style.backgroundColor = "#6c5ce7"; 
                }
                else if (tipus == "submit")
                {
                    console.log("Modificant input submit");
                    formulari.elements[i].style.width = "5vw";
                    formulari.elements[i].style.height = "5vw";
                    formulari.elements[i].style.borderRadius = "100%";
                    formulari.elements[i].style.color = "Blue";
                }
                break;
        
            default:
                break;
        }
    }
}