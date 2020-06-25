// Mutations

import { gql } from "apollo-boost";

export const RegisterMutation = gql`
  mutation register($username: String!, $email: String!, $password: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      jwt
      user {
        username
      }
    }
  }
`;

export const LoginMutation = gql`
  mutation login($identifier: String!, $password: String!) {
    login(
      input: { identifier: $identifier, password: $password }
    ) {
      jwt
      user {
        username
      }
    }
  }
`;
