import gql from 'graphql-tag'

export default gql`
query Locations($input: LocationsInput!) {
    locations(input: $input) {
        type
        slug
    }
}
`