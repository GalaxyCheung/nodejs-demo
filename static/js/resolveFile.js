const fs = require('fs')
const path = require('path')

const regStyle = /<style type=\"text\/css\">[\s\S]*<\/style>/g
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, '../file/offwork.html'), 'utf8', (err, dataStr) => {
  if(err) {
    console.log('失败：' + err);
  }

  resolveCSS(dataStr)
  resolveScript(dataStr)
  resolveHtml(dataStr)
})


function resolveCSS(str) {
  const style = regStyle.exec(str)
  const pureStyle = style[0].replace('<style type="text/css">', '').replace('</style>', '')

  fs.writeFile(path.join(__dirname, '../css/offwork.css'), pureStyle, writeFileErr)
}

function resolveScript(str) {
  const script = regScript.exec(str)
  const pureScript = script[0].replace('<script>', '').replace('</script>', '')

  fs.writeFile(path.join(__dirname, '../js/offwork.js'), pureScript, writeFileErr)
}

function resolveHtml(str) {
  const pureHtml = str.replace(regStyle, '<link rel="stylesheet" href="../css/offwork.css" />')
  .replace(regScript, '<script src="../js/offwork.js"></script>')

  fs.writeFile(path.join(__dirname, '../html/offwork.html'), pureHtml, writeFileErr)
}

function writeFileErr(err) {
  if(err) {
    console.log('失败：' + err);
  }
}