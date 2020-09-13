     const btnSave = document.getElementById('btn-save');
     
     //crea elementos 
     const addElement = () => {
          const name = document.getElementById('nombre').value;

          //crea el elemento
          const newElement = document.createElement('p');
          const newContent = document.createTextNode(name);

          newElement.appendChild(newContent);
          newElement.setAttribute('align', 'center');

          document.getElementById('p_mostrar').appendChild(newElement);
          //console.log(newElement);   
     }

     btnSave.addEventListener('click', addElement);