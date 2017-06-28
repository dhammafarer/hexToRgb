module.exports = function hexToRgb (data) {
  return parseData(data)
    .map(splitItem)
    .map(convertToDecimal)
    .map(formatAsRGB)
    .reduce((res, row) => res + row + '\n', '')
}


function formatAsRGB (array) {
  return `rgb(${array.join(',')})`
}

function convertToDecimal (array) {
  return array.map(a => parseInt(a, 16))
}

function splitItem (x) {
  return x.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i).slice(1)
}

function parseData (data) {
  return data.toString()
  .trim()
  .split('\n')
}
