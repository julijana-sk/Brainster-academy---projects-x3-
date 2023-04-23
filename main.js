// filtering cards
document.querySelector("#filter-marketing").addEventListener("change", filterMarketing);
document.querySelector("#filter-coding").addEventListener("change", filterCoding);
document.querySelector("#filter-design").addEventListener("change", filterDesign);


function filterMarketing() {
    hideAllCards();

    if(document.querySelector("#filter-marketing").checked) {
        const marketingCards = document.querySelectorAll(".cards-marketing");
        marketingCards.forEach(marketingCards => {
            marketingCards.style.display = "inline-block";
        });
        
        document.querySelector("#filter-coding").checked = false;
        document.querySelector("#filter-design").checked = false;
    } else {
        showAllCards();
    }
}


function filterCoding() {
    hideAllCards();

    if(document.querySelector("#filter-coding").checked) {
        const codingCards = document.querySelectorAll(".cards-coding");
        codingCards.forEach(codingCards => {
            codingCards.style.display = "inline-block";
        });

        document.querySelector("#filter-marketing").checked = false;
        document.querySelector("#filter-design").checked = false;
    } else {
        showAllCards();
    }
}

function filterDesign() {
    hideAllCards();

    if(document.querySelector("#filter-design").checked) {
        const designCards = document.querySelectorAll(".cards-design");
        designCards.forEach(designCards => {
            designCards.style.display = "inline-block";
        });
        
        document.querySelector("#filter-coding").checked = false;
        document.querySelector("#filter-marketing").checked = false;
    } else {
        showAllCards();
    }
}


function hideAllCards() {
    const allCards = document.querySelectorAll(".card");

    allCards.forEach(card => {
        card.style.display = "none";
    });
}

function showAllCards() {
    const allCards = document.querySelectorAll(".card");

    allCards.forEach(card => {
        card.style.display = "inline-block";
    });
}
// filtering cards - end

