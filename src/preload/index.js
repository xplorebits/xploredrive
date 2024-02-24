import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  connect: function (credentails) {
    return new Promise((resolve, reject) => {
      ipcRenderer.send('dbfs-connnect', credentails)

      ipcRenderer.once('dbfs-connect', function (event, data) {
        if (!data?.success) {
          reject(data.error)
        } else {
          resolve(data.data)
        }
      })
    })
  },
  getStatus: function (path) {
    ipcRenderer.send('dbfs-get-status', path)
  },
  getList: function (path) {
    ipcRenderer.send('dbfs-get-list', path)
  },
  createDirectory: function () {},
  deleteDirectory: function () {},
  deleteFile: function () {},
  uploadFile: function () {},
  openStream: function () {},
  addBlock: function () {},
  closeStream: function () {}
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
