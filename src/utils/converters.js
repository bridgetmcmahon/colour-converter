// ------------ HEX TO RGB ------------

export const hexToRGB = color => {
    let pattern
    if (color.length === 7) {
        pattern = /#(..)(..)(..)/;
    } else {
        pattern = /(..)(..)(..)/;
    }

    const colorsSplit = color.split(pattern).filter(n => n);
  
    const r = parseInt(colorsSplit[0], 16);
    const g = parseInt(colorsSplit[1], 16);
    const b = parseInt(colorsSplit[2], 16);
  
    return `rgb(${r}, ${g}, ${b})`;
};

// ------------ HEX TO HSL ------------

export const hexToHSL = (color) => {
    const rgbColour = hexToRGB(color)
    console.log(rgbColour)
    return rgbToHSL(rgbColour)
}

// ------------ RGB TO HEX ------------

const colorToHex = (rgbColor) => {
    let hex = Number(rgbColor).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
  
    return hex;
};
  
export const rgbToHex = (color) => {
    const pattern = /rgb\(([0-9]{1,3}),\s?([0-9]{1,3}),\s?([0-9]{1,3})\)/
    const hexSplit = color.split(pattern).filter(n => n);

    const r = colorToHex(hexSplit[0].trim());
    const g = colorToHex(hexSplit[1].trim());
    const b = colorToHex(hexSplit[2].trim());

    return `#${r}${g}${b}`;
};

// ------------ RGB TO HSL ------------

//  SATURATION CALCULATION
const calculateSat = (min, max, l) => {
    let s;
    if (min === max) {
      s = 0;
    } else if (l < 0.5) {
      s = (max - min) / (max + min);
    } else {
      s = (max - min) / (2 - max - min);
    };
    s = Math.round(s * 100);
  
    return s;
};
  
// HUE CALCULATION
const calculateHue = (min, max, r, g, b) => {
    let h;
    if (max.toFixed(2) === r) {
      h = (g - b) / (max - min);
    } else if (max.toFixed(2) === g) {
      h = 2.0 + (b - r) / (max - min);
    } else if (max.toFixed(2) === b) {
      h = 4.0 + (r - g) / (max - min);
    }
  
    h = Math.round(h * 60);
    if (h < 0) {
      h += 360;
    }
    return h;
};
  
// RGB TO HSL FUNCTION
export const rgbToHSL = (color) => {
    let regex = /rgb\(([0-9]{1,3}),\s?([0-9]{1,3}),\s?([0-9]{1,3})\)/
    let [, r, g, b] = color.match(regex);
  
    r = (r / 255).toFixed(2);
    g = (g / 255).toFixed(2);
    b = (b / 255).toFixed(2);
  
    let min = Math.min(r, g, b);
    let max = Math.max(r, g, b);
  
    let l = ((min + max) / 2);
    const s = calculateSat(min, max, l);
    let h = 0;
    if (s !== 0) {
      h = calculateHue(min, max, r, g, b);
    }
  
    l = Math.round(l * 100);
  
    return `hsl(${h}, ${s}%, ${l}%)`;
};
  
  
// ------------ HSL TO RGB ------------
  
// CHECK BETWEEN 0 and 1
const checkZeroToOne = (num) => {
    if (num < 0) {
      num += 1
    } else if (num > 1) {
      num -= 1;
    }
    return num;
};

// FIND FORMULA FOR RGB CALC
const findFormula = (temp1, temp2, tempColor) => {
    let output;
    if ((tempColor * 6) < 1) {
      output = temp2 + (temp1 - temp2) * 6 * tempColor;
    } else if ((tempColor * 2) < 1) {
      output = temp1;
    } else if ((tempColor * 3) < 2) {
      output = temp2 + (temp1 - temp2) * (0.666 - tempColor) * 6;
    } else {
      output = temp2;
    }
  
    return output;
};
  
export const hslToRGB = (color) => {
    let regex = /hsl\(([0-9]{1,3}),\s?([0-9]{1,3})%,\s?([0-9]{1,3})%\)/
    let [, h, s, l] = color.match(regex);
    s /= 100;
    l /= 100;
    let r, g, b;
    console.log(h, s, l);
  
    if (s === 0) {
      r = g = b = (l * 255);
    } else {
      let temp1, temp2;
  
      if (l < 0.5) {
        temp1 = l * (1 + s);
      } else {
        temp1 = l + s - l * s;
      }
  
      temp2 = 2 * l - temp1;
  
      h = h / 360;
  
      let tempR = h + 0.333;
      tempR = checkZeroToOne(tempR);
      let tempG = h;
      tempG = checkZeroToOne(tempG);
      let tempB = h - 0.333;
      tempB = checkZeroToOne(tempB);
  
      r = findFormula(temp1, temp2, tempR);
      g = findFormula(temp1, temp2, tempG);
      b = findFormula(temp1, temp2, tempB);
    }
  
    return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
};

// ------------ HSL TO HEX ------------

export const hslToHex = colour => {
    const rgbColour = hslToRGB(colour)
    return rgbToHex(rgbColour)
}