export const dbfsDeleteDir = async function (path = '') {
  const dbfsApi = await import('dbfs-api')
  return await dbfsApi.deleteDirectory(path, true)
}
