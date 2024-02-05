/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");

let templeList = [];


/* async displayTemples Function */
const displayTemples =(temples) => {
    temples.forEach((temple) => {
        let article = document.createElement("article");

        let h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        let img = document.createElement("img");
        img.src = temple.imageUrl; 
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  
    templeList = await response.json();

    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    while (templesElement.firstChild){
        templesElement.removeChild(templesElement.firstChild);
    }
};


/* filterTemples Function */
const filterTemples = (temples) => {
    reset();

    let filter = document.getElementById("filter").value;
    switch (filter) {
        case "utah":

        displayTemples(temples.filter((temple) => temple.location("utah")));
        break;
        case "nonutah":
            displayTemples(
                temples.filter((temple) => 
                ! temple.location.includes("utah"))
            );

        break;
        case "older":
        displayTemples(
            temples.filter(
                (temple) => new
                Date(temple.dedicated) < new Date(1950, 0, 1)
            )
        );

        break;
        case "all":
            displayTemples(temples);
        break; 
        default:
            alert("invalid filter option");
    }
};



/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => { filterTemples(templeList) });

getTemples();