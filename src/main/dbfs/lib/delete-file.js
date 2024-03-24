import { deleteFile } from 'dbfs-api'

export const dbfsDeleteFile = async function (path = '') {
  return await deleteFile(path)
}
