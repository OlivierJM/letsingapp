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