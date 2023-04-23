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


// validating data in form

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const student = document.getElementById('student');
const compania = document.getElementById('compania');
const telefon = document.getElementById('telefon');



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const studentValue = student.value.trim();
    const companiaValue = compania.value.trim();
    const telefonValue = telefon.value.trim();



    if(usernameValue === '') {
        setError(username, 'Внесете ги вашето име и презиме');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Внесете го вашиот имејл');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Внесете валидна имејл адреса');
    } else {
        setSuccess(email);
    }

    if(studentValue === '') {
        setError(student, 'Изберете тип на студент');
    } else {
        setSuccess(student);
    }

    if(companiaValue === '') {
        setError(compania, 'Внесете го името на вашата компанија');
    } else {
        setSuccess(compania);
    }

    if(telefonValue === '') {
        setError(telefon, 'Внесете го телефонот на вашата компанија');
    } else if (isNaN(telefonValue)) {
       setError(telefon, 'Внесете валиден податок');
    } else {
        setSuccess(telefon);
    }
    
};
// validating data - end 


