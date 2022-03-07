const boton = document.querySelectorAll('button');
const fichas = ["X", "O"]

boton.forEach(p => {
  p.onclick = () => {
    
    p.innerText = fichas[Math.round(Math.random() * 1)]
  }
});