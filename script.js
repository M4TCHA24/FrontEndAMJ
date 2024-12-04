
function turnOn() {
    const temperature = document.querySelector('.temperature');
    temperature.textContent = "25 °C";
    temperature.style.color = "#27ae60";
  }
  
  function turnOff() {
    const temperature = document.querySelector('.temperature');
    temperature.textContent = "N/A °C";
    temperature.style.color = "#34495e";
  }

  