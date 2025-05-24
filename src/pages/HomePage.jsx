import { gql, useQuery } from "@apollo/client";
import client from "../lib/apolloClient";

const GET_HOMEPAGE_CONTENT = gql`
  query {
    pageBy(uri: "home") {
      title
      homepageContent {
        productName
        tagline
        heroImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export default function Homesection() {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_CONTENT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const content = data.pageBy.homepageContent;

  return (
    <div>
      <h1>{content.productName}</h1>
      <p>{content.tagline}</p>
      <img src={content.heroImage.sourceUrl} alt="Hero" />
    </div>
  );
}
