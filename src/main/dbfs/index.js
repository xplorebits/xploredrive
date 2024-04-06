import { ipcMain } from 'electron'
import { dbfsConnect, dbfsList, dbfsDeleteDir, dbfsDeleteFile } from './lib'

const channels = [
  {
    name: 'dbfs-connect',
    handler: dbfsConnect
  },
  {
    name: 'dbfs-get-list',
    handler: dbfsList
  },
  {
    name: 'dbfs-delete-dir',
    handler: dbfsDeleteDir
  },
  {
    name: 'dbfs-delete-file',
    handler: dbfsDeleteFile
  }
]

channels.forEach((ch) => {
  ipcMain.on(ch.name, function (channel, data) {
    ch.handler(data)
      .then((response) => {
        channel.reply(ch.name, { success: true, data: response })
      })
      .catch((error) => {
        channel.reply(ch.name, { success: false, error: error })
      })
  })
})
