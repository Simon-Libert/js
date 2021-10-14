// //  console débogage
// console.log('bonjour');

// for (i = 0; i < 3; i++) {
//     console.log(i);
// }

// console.log('au revoir');

// //  chaine de caractères : anti slash pour échapper les doubles guillemets ou simpls guillemets "blabla c\'est blablabla"
// //  anti slash et n = new line de caractère ex : \n



// // variables 

// let cours = "dtc pov toi"

// console.log(cours)

// cours ='t mor'
// console.log(cours)

// const prenom = "Jean"
// console.log(prenom)

// // fonctions

// function faireQuelqueChose() {
//     console.log('je fais un truc');
// }


// // ou plus moderne fonction fléchée comme suit

// const faireUneTache = (type) => {
//     console.log('je fais : ' + type);
// }

const btn = document.querySelector('#btn'); /* appelle la variable btn */
const img = document.getElementById('img'); /* appelle la variable btn */


btn.addEventListener('click', () => {
    img.classList.toggle('show');
    console.log('yes');
})

const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');

mouseEvent.addEventListener('mousemove', (e) => {
    /* (e) permet d'aller chercher lre inforations quand la fonction est faite */
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";

    if (e.x > 500) {
        document.body.style.filter = "blur(3px)";
    } else {
        document.body.style.filter = "none";
    }
});

btn.innerHTML = 'blabla';

// **************************************************************************************

document.getElementById('input2').addEventListener('input', (e) => {
    vertical.innerHTML = e.target.value;

})

const theme = document.querySelectorAll('.theme');

theme.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target.id);
        document.body.classList.remove("darkTheme", "salmonTheme", "yellowTheme");
        switch (e.target.id) {
            case "dark":
                document.body.classList.add("darkTheme");
                break;

            case "salmon":
                document.body.classList.add("salmonTheme");
                break;

            case "yellow":
                document.body.classList.add("yellowTheme");
                break;
                default:
                null; 

        }

    })
})