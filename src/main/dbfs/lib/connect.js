export const dbfsConnect = async function (credentials = { url: '', token: '' }) {
  const dbfsApi = await import('dbfs-api')
  return await dbfsApi.connect(credentials)
}
