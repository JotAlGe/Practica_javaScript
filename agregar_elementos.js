
     const btnSave = document.getElementById('btn-save');
     
     const addElement = () => {
          const divContainer = document.getElementById('container');
          const name = document.getElementById('nombre').value;
          //const p_mostrar = document.getElementById('p_mostrar');
          //crea el elemento
          const newElement = document.createElement('p');
          const newContent = document.createTextNode(name);

          newElement.appendChild(newContent);
          newElement.setAttribute('align', 'center');

          document.getElementById('p_mostrar').appendChild(newElement);
          //console.log(newElement);   
     }

     btnSave.addEventListener('click', addElement);