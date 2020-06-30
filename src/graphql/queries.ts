import { gql } from "apollo-boost";

export const AlbumQuery = gql`
  {
    albums {
      title
      id
    }
  }
`;

export const SongsListQuery = gql`
  {
    songs(sort: "updatedAt:DESC") {
      title
      id
      lyrics
      author
    }
  }
`;
export const SongListQuery = gql`
  query album($id: ID!) {
    album(id: $id) {
      songs {
        id
        title
        lyrics
        author
      }
    }
  }
`;
