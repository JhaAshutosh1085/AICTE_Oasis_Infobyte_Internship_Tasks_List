const particleCount = 60;
    const container = document.querySelector('.particles');
    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDelay = `${Math.random() * 10}s`;
      p.style.animationDuration = `${5 + Math.random() * 10}s`;
      container.appendChild(p);
    }

    function convertTemperature() {
      const temp = parseFloat(document.getElementById('temperatureInput').value);
      const unit = document.getElementById('unitInput').value;
      const result = document.getElementById('result');

      if (isNaN(temp)) {
        result.textContent = "Please enter a valid number.";
        return;
      }

      let celsius, fahrenheit, kelvin;

      if (unit === 'celsius') {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
      } else if (unit === 'fahrenheit') {
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = ((temp - 32) * 5/9) + 273.15;
      } else {
        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (temp - 273.15) * 9/5 + 32;
      }

      result.innerHTML = `
        <p>${celsius.toFixed(2)} °C</p>
        <p>${fahrenheit.toFixed(2)} °F</p>
        <p>${kelvin.toFixed(2)} K</p>
      `;
    }