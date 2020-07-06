import gql from 'graphql-tag'

export default gql`  
fragment JobFragment on Job {
    id
    title
    slug
    description
    applyUrl
  
    cities {
        name
    }
  
    countries {
        name
    }
  
    remotes {
        name
    }
  
    tags {
        name
    }
  
    company {
        name
        logoUrl
    }
  
    commitment {
        title
    }
}`