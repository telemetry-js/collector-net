'use strict'

const fs = require('fs')

module.exports = function (snmpPath, callback) {
  fs.readFile(snmpPath, 'utf8', (err, data) => {
    if (err) return callback(err)

    const lines = data.trim().split(/\n+/)
    const result = {}

    if (lines.length % 2 !== 0) {
      return callback(new RangeError('Uneven number of lines'))
    }

    for (let i = 0; i < lines.length; i += 2) {
      const line1 = lines[i]
      const line2 = lines[i + 1]

      const pos = line1.indexOf(':')
      if (pos <= 0) continue

      const protocol = line1.slice(0, pos)
      const columns = line1.slice(pos + 1).trim().split(' ')
      const values = line2.slice(pos + 1).trim().split(' ')
      const count = Math.min(columns.length, values.length)
      const group = result[protocol] = {}

      for (let i = 0; i < count; i++) {
        group[columns[i]] = values[i]
      }
    }

    callback(null, result)
  })
}
