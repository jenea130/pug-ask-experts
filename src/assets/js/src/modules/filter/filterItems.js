export default function() {
   const filterImg = document.querySelectorAll('.taxes__img');
   
   document.querySelector(".taxes__header").addEventListener('click', event => {
     if (event.target.tagName !== 'LI') return false; 

     let filterClass = event.target.dataset['target'];
     
     filterImg.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
     });
   });
}