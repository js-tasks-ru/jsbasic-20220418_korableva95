
function highlight(table) {
  let td = table.cells;
    for (let i =0; i<table.rows.length; i++) {
      if (td[i].dataset.available === 'true') {
      tr.classList.toogle('available', true);
      }
       else if(td[i].dataset.available === 'false') 
       {
          tr.classList.toggle('unavailable', true);
          } else if (!td[i].hasAttribute('data-available')) {
            tr.hiden = true;
             } else if (td[i].textContent === 'm') {
                tr.classList.toggle('male', true);
                } else if (td[i].textContent === 'f') {
                    tr.classList.toggle('female', true);  
                        } else if (td[i].textContent<18) {
                      tr.style.textDecoration = 'line-through';
     }
   }
}