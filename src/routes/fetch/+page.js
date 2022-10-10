import { createClient } from '@urql/core'

export async function load({ fetch }) {
  const client = createClient({
    url: 'https://api.spacex.land/graphql',
    fetch,
  })

  const { data, error } = await client.query(`{launchesPast(limit: 1) {mission_name}}`).toPromise()

  console.log('data:', data)
  console.log('error:', error)
  return { data, error }
}
