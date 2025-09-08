import { gql } from '@apollo/client';

export const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      title
      completed
    }
  }
`;
export const ADD_TASK = gql`
  mutation AddTask($title: String!) {
    addTask(title: $title) {
      id
      title
      completed
    }
  }
`;

export const MARK_COMPLETE = gql`
  mutation MarkComplete($id: Int!) {
    markComplete(id: $id) {
      id
      title
      completed
    }
  }
`;


export const DELETE_TASK = gql`
  mutation DeleteTask($id: Int!) {
    deleteTask(id: $id) {
      id
    }
  }
`;
