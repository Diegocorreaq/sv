const alternatives = [
  {text:"", images:"images/cat-01.gif"},
  {text:"", images:"images/2.gif"},
  {text:"", images:"images/3.gif"},
  {text:"", images:"images/4.gif"},
  {text:"", images:"images/cat-05.gif"},
]
const ohyes = {text:"Sabía que aceptarias <3", images:"images/f.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  const botonSi = document.querySelector(".button");
  const botonNo = document.querySelector(".button__negative"); // Obtiene solo un botón con clase "button"
  let tamaño = 16;

  button.addEventListener('click', () => {
    if (button.textContent == "Si") {
      updateDisplay(ohyes);
      buttons.forEach(btn => btn.style.display = 'none');
    }

    if (button.textContent == "No") {
      count++;
      if (count < alternatives.length) {
        updateDisplay(alternatives[count]);
        botonSi.style.position = "relative";
        botonSi.style.zIndex = "10";
        // Aumenta el tamaño del botón "Sí"
        tamaño += 50;
        botonSi.style.fontSize = tamaño + "px";
        botonSi.style.padding = (tamaño / 2) + "px";
        if (count ==3) {
          botonNo.style.display = 'none';
        }

      }
      
      
      else {
        buttons.forEach(btn => btn.style.display = 'none');
        errorButton.style.display = 'inline-block';
      }
    }
  });
});
