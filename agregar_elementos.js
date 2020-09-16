     const btnSave = document.getElementById('btn-save');
     const p_mostrar = document.getElementById('p_mostrar');
     //crea elementos 
     const addElement = () => {
          const name = document.getElementById('nombre').value;

          //crea el elemento
          const newElement = document.createElement('p');
          const newContent = document.createTextNode(name);

          newElement.appendChild(newContent);
          newElement.setAttribute('align', 'center');

          p_mostrar.appendChild(newElement);
          //console.log(newElement);   
     }

     const clearInput = () => {
          document.getElementById('nombre').value = '';
     };
     //click y ejecuta addElement
     btnSave.addEventListener('click', addElement);
     btnSave.addEventListener('click', clearInput);