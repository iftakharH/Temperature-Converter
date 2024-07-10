document.getElementById('convertButton').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitInput').value;
    const output = document.getElementById('output');

    if (isNaN(temperature)) {
        output.textContent = 'Please enter a valid number';
        return;
    }

    let convertedTemperature;
    let convertedUnit;

    if (unit === 'celsius') {
        const fahrenheit = (temperature * 9 / 5) + 32;
        const kelvin = temperature + 273.15;
        convertedTemperature = `${fahrenheit.toFixed(2)} °F, ${kelvin.toFixed(2)} K`;
        convertedUnit = 'Fahrenheit and Kelvin';
    } else if (unit === 'fahrenheit') {
        const celsius = (temperature - 32) * 5 / 9;
        const kelvin = celsius + 273.15;
        convertedTemperature = `${celsius.toFixed(2)} °C, ${kelvin.toFixed(2)} K`;
        convertedUnit = 'Celsius and Kelvin';
    } else if (unit === 'kelvin') {
        const celsius = temperature - 273.15;
        const fahrenheit = (celsius * 9 / 5) + 32;
        convertedTemperature = `${celsius.toFixed(2)} °C, ${fahrenheit.toFixed(2)} °F`;
        convertedUnit = 'Celsius and Fahrenheit';
    }

    output.textContent = `Converted temperature: ${convertedTemperature} (${convertedUnit})`;
});
