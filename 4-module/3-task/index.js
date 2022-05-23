
function highlight(table) {
  for(let i=0; i<table.rows.length; i++) {
    let tr = table.rows[i];

    for(let i2=0; i2<tr.cells.length; i2++){
      let td = tr.cells[i2];

      if (td.dataset.available === 'true') {
      tr.classList.toggle('available', true);
      }
       else if(td.dataset.available === 'false') 
       {
          tr.classList.toggle('unavailable', true);
          } else if (!td.hasAttribute('data-available')) {
            tr.hidden = true;
             } 
             
             if (td.textContent === 'm') {
               tr.classList.toggle("male", true)
             } else if (td.textContent === 'f'){
               tr.classList.toggle("female")
             }
                        if (td.textContent < 18) 
                      tr.style.textDecoration = "line-through";
         
       }
     }
    }
