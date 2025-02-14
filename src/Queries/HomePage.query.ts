import { gql } from "@apollo/client";

export const GET_HOME_PAGE = gql`
  query GetPageModules {
    pageCollection(where: { slug: "home" }, limit: 1) {
      items {
        pageTitle
        slug
        modulesCollection(limit: 5) {
          items {
            __typename
            ... on HeroBanner {
              title
              description
              image {
                url
              }
              ctAsCollection {
                items {
                  _id
                  label
                  url
                }
              }
            }
            ... on WorldOfPlay {
              title
              imageCollection(limit: 10) {
                items {
                  title
                  description
                  image {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
