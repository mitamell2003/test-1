function perfectSquaresInRange(start, end) {
    let perfectSquares = [];
  
    for (let i = Math.ceil(Math.sqrt(start)); i * i <= end; i++) {
      perfectSquares.push(i * i);
    }
  
    return perfectSquares;
  }
  
  function displayPerfectSquares() {
    let a = parseInt(document.getElementById("start").value);
    let b = parseInt(document.getElementById("end").value);
    let squares = perfectSquaresInRange(a, b);
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
  
    squares.forEach((square) => {
      let p = document.createElement("p");
      p.textContent = square;
      outputDiv.appendChild(p);
    });
  }



