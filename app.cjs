const fs = require('fs')
const path = require('path')
const os = require('os')
const homePath = os.homedir()
const fileName = fs.readdirSync(path.join(homePath, "Desktop", "your_folder_name")) //write your folder name

function adder(file) {
let fullName = String(file).split("")
let type

for (let i = 0; i<fullName.length; i++) {
  if (fullName[i] === ".") {
    type = fullName.slice(i-fullName.length+1).join("")
  }
}

const folPath = path.join(homePath, "Desktop", type)
fs.mkdir(folPath, { recursive: true }, (err) => {
  if (err) {
    return console.error("Error creating the folder:", err)
  }
})

const newPath = path.join(path.join(homePath, "Desktop", type), file)
const oldPath = path.join(path.join(homePath, "Desktop", "your_folder_name"), file) //write your folder name

fs.rename(oldPath, newPath, (err) => {
  if (err) {
    console.error('Error replacing:', err)
    return
  }
  console.log('File successfully replaced!')
});
}

fileName.forEach(file => adder(file))