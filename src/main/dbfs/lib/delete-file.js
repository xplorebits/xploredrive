export const dbfsDeleteFile = async function (path = '') {
  const dbfsApi = await import('dbfs-api')
  return await dbfsApi.deleteFile(path)
}
