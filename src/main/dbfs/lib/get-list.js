export const dbfsList = async function (path = '') {
  const dbfsApi = await import('dbfs-api')
  return await dbfsApi.getList(path)
}
