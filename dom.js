const container =document.getElementById('container');
console.log('parent',container.parentElement);
console.log('nextsibling', container.nextElementSibling);
console.log('previoussibling',container.previousElementSibling);
console.log('chidren', container.children);
console.log('who is your first children?', container.firstChild);
console.log('who is your first children?', container.firstElementChild);
console.log('lastchild', container.lastElementChild);

const html = document.documentElement;
console.log({html});

console.log('body',document.body);

//UPDATING DOM
const heading = document.getElementById('heading');
heading.innerHTML = 'Introduction To DOM Manipulation';
heading.style.color='skyblue';

//CREATING DOM
const textChild=document.createElement('p');
container.appendChild(textChild);
textChild.innerHTML ='This is the new child'
textChild.setAttribute("class","container-new-child");
textChild.setAttribute("id","paragraph");

//DELETING DOM
heading.remove();
const button=document.getElementById('button');
button.style.border='none';
button.style.padding='10px 15px';
button.style.borderRadius='5px';
button.style.cursor='pointer';
button.style.color='#ffffff';
button.style.backgroundColor='#0096FF';

button.addEventListener('click', function(){
    button.innerHTML='Clicked!';
    button.style.background='#50C878'
})






