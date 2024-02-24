import { getList } from 'dbfs-api'

export const dbfsList = async function (path = '') {
  return await getList(path)
}
