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
// TODO: add human variant
// Races concat function module export

function createRaceJSON (path) {
    fs.writeFile(path, races, () => {
        console.log(`Race JSON created or updated at ${path}`)
    })
}

module.exports = {
    races: races,
    createRaceJSON: createRaceJSON
}
