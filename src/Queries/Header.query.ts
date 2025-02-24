import { gql } from "@apollo/client";

export const GET_HEADER = gql`
  query GetHeader {
    headerCollection {
      items {
        logo {
          url
        }
        navBarLinkCollection {
          items {
            label
            url
          }
        }
      }
    }
  }
`;
