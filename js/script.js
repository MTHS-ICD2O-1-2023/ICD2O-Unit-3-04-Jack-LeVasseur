// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jack
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * This function converts Fahrenheit to Celsius
 */
function convertFahrenheitToCelsius() {
  // input
  const fahrenheit = parseFloat(document.getElementById('fahrenheit-input').value);

  // process
  const celsius = ((fahrenheit - 32) * 5 / 9).toFixed(3);

  // output
  document.getElementById('celsius-result').innerHTML = 'Celsius:' + celsius + '°';
}
