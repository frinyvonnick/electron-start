const window = require('electron-window')
const path = require('path')

const createWindow = ({ file, data, options }) => {
  const newWindow = window.createWindow(Object.assign({}, { width: 1000, height: 800 }, options))
  const someArgs = Object.assign({}, data, { isDeveloppementEnv: process.env.NODE_ENV === 'developpement' })

  newWindow.showUrl(file, someArgs)

  return newWindow
}

exports.createWindow = createWindow

exports.createMainWindow = (options) => {
  return createWindow({
    file: path.resolve(__dirname, '..', 'windows', 'index.html'),
		options,
  })
}
