const fs = require('fs')
const Path = require('path')

// Populates the race table object for the ./tables/races/ directory
var races = {}
var raceDir = Path.join(__dirname, 'tables', 'races')
var files = fs.readdirSync(raceDir)
files.forEach((file) => {
    var regex = /(.*?).json/
    var match = file.match(regex)[1]
    races[match] = JSON.parse(fs.readFileSync(Path.join(raceDir, file), 'utf8'))
})

// Races concat function module export
module.exports.races = races