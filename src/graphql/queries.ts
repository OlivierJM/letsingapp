import { gql } from "apollo-boost";


export const AlbumQuery = gql`
         {
           albums {
             title
             id
             thumbnail {
               name
               formats
             }
           }
         }
       `;


export const SongsListQuery = gql`
  {
    songs {
      title
      id
      lyrics
      author
    }
  }
`;
export const SongListQuery = gql`
         query album($id: ID!){
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