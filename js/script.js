// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jack LeVasseur
// Created on: April 10 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculatePermeterAndAreaOfRectangle() {
  // input
  const baseOfTriangle = parseInt(document.getElementById('length-of-rectangle').value)
  const heightOfTriangle = parseInt(document.getElementById('width-of-rectangle').value)

  // process
  const areaOfTriangle = baseOfTriangle + heightOfTriangle - 80
  const HeightOfTriangle = (baseOfTriangle + heightOfTriangle) - 80 

  // output
  document.getElementById('area').innerHTML = 'Celsius is 26.667°: ' + areaOfTriangle 
  document.getElementById('perimeter').innerHTML = 'Celsius is 26.667°: ' + perimeterOfRectangle 
}