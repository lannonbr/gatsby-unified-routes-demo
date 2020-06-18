import { createPagesFromData, graphql } from 'gatsby'

const FoodPost = ({data}) => JSON.stringify(data)

export const query = graphql`
  query FoodPost($name: String) {
    foodYaml (name: { eq: $name }) {
      name
      type
      cost
    }
  }
`

export default createPagesFromData(FoodPost, `FoodYaml`)