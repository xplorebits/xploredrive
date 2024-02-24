import { ipcMain } from 'electron'
import { dbfsConnect, dbfsList } from './lib'

ipcMain.on('dbfs-connnect', function (channel, data) {
  dbfsConnect(data)
    .then((response) => {
      channel.reply('dbfs-connect', { success: true, data: response })
    })
    .catch((error) => {
      channel.reply('dbfs-connect', { success: false, error: error })
    })
})

ipcMain.on('dbfs-get-list', function (channel, data) {
  dbfsList(data)
    .then((response) => {
      channel.reply('dbfs-get-list', { success: true, data: response })
    })
    .catch((error) => {
      channel.reply('dbfs-get-list', { success: false, error: error })
    })
})
