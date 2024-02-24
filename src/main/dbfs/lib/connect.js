import { connect } from 'dbfs-api'

export const dbfsConnect = async function (credentials = { url: '', token: '' }) {
  return await connect(credentials)
}
