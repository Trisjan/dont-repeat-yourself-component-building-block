import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
    let query = gql`
    query uitleengeschiedenis {
        uitleengeschiedenis1 {
            title
            author
            image {
                url
            }
            uitleendatum
            inleverdatum
        }
    }
`

    return await hygraph.request(query)
}