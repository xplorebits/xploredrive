import { deleteDirectory } from 'dbfs-api'

export const dbfsDeleteDir = async function (path = '') {
  return await deleteDirectory(path, true)
}
