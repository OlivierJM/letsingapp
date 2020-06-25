// Mutations

import { gql } from "apollo-boost";

export const RegisterMutation = gql`
         mutation register($username: String!, $email: String!, $password: String!){
           register(input: { username: $username, email: $email, password: $password }){
               jwt
               user {
                   username
               }
           }
         }
       `;
