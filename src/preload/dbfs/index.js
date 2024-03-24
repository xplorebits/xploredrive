import { ipcRenderer } from 'electron'

export default {
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
    return new Promise((resolve, reject) => {
      ipcRenderer.send('dbfs-get-list', path)

      ipcRenderer.once('dbfs-get-list', function (event, data) {
        if (!data?.success) {
          reject(data.error)
        } else {
          resolve(data.data)
        }
      })
    })
  },
  createDirectory: function () {},
  deleteDirectory: function (path) {
    return new Promise((resolve, reject) => {
      ipcRenderer.send('dbfs-delete-dir', path)

      ipcRenderer.once('dbfs-delete-dir', function (event, data) {
        if (!data?.success) {
          reject(data.error)
        } else {
          resolve(data.data)
        }
      })
    })
  },
  deleteFile: function () {},
  uploadFile: function () {},
  openStream: function () {},
  addBlock: function () {},
  closeStream: function () {}
}
