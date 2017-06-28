import test from 'ava'
import fs from 'fs'
import hexToRgb from './hexToRgb.js'

const hex = fs.readFileSync(__dirname + '/hex')
const rgb = fs.readFileSync(__dirname + '/rgb')

test('hex to rgb converter', t => {
  t.is(hexToRgb(hex), rgb.toString(), '')
})
