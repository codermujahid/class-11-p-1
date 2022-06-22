 document.title = "web developer"
 console.log(document.querySelector('h1').innerHTML);
 console.log(document.querySelector('h1').innerText);
 console.log(document.querySelector('h1').textContent); 

//  //jekono tager vitor notun valu set kora jay
//  let h1 = document.querySelector('h1').innerHTML = 'we are js deves'


//  let h1 = document.querySelector('h1').innerHTML;
 
 console.log(h1);

const p = document.querySelectorAll('p');

//multi valu jodi hoy tokhon amra foreach loop chalayte hobe.
p.forEach((item) => {
    item.innerHTML ='Bangladesh'

    if (item.innerHTML === 'lao') {
        item.innerHTML = 'kodooooooooooo'
        
    }


    item.innerHTML === 'alo' ? item.innerHTML = 'kodoooooo' : '';
   item.innerHTML !== 'alo' ? item.innerHTML = 'bali' : '';

});


/**
 * html valur vitore jotogula attrebeut ase sob dhorarr niom.
 * er vitorer setAttribute er madhome new valu add kora jay.
 */
const h1 = document.querySelector('h1');


h1.setAttribute('width', '500')
h1.setAttribute('class', 'foxess')
h1.setAttribute('id', 'kjshf')
h1.setAttribute('style', 'color:red;font-family:impact;font-size:100px ;')

//Style

h1.style.color = 'red'
h1.style.fontFamily = 'impact'

h1.className = 'loxess'
h1.classList.add('Masoxess')

// console.log(h1);
console.log(h1.hasAttribute('height'));


