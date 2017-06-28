const fs = require('fs')
const hexToRgb = require('./hexToRgb.js')

const filename = process.argv[2]
const data = fs.readFileSync(filename)
const result = hexToRgb(data)

fs.writeFile('/home/pawel/Desktop/rgb', result, (err) => {
  if (err) throw err
  console.log('File written successfully')
  console.log(result)
})
