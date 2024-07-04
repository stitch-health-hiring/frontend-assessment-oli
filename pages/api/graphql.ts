import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { gql } from 'graphql-tag'

import { Patient } from '../../types/patients'

// Fake delay to mock remote request
const later = (delay: number,) =>
    new Promise(resolve => setTimeout(resolve, delay));

const typeDefs = gql`
  type Query {
    patient_list: Patients
  }
  type Patients {
    patients: [Patient!]!
  }
  type Patient {
    id: ID
    firstName: String 
    lastName: String
    dateOfBirth: String
    dateOfRegistration: String
    favoriteColor: String
  }
`

const patients: Patient[] = [
  {
    firstName: "Ellie-May",
    lastName: "Conner",
    id: "2593afce",
    dateOfBirth: "1931-02-07",
    dateOfRegistration: "2021-01-19",
    favoriteColor: "blue"
  },
  {
    firstName: "Alexis",
    lastName: "Stewart",
    id: "63ed7504",
    dateOfBirth: "1962-09-21",
    dateOfRegistration: "2021-07-01",
    favoriteColor: "red"
  },
  {
    firstName: "Kathleen",
    lastName: "Chambers",
    id: "520879ca",
    dateOfBirth: "1932-05-19",
    dateOfRegistration: "2021-08-06",
    favoriteColor: "yellow"
  },
  {
    firstName: "Ben",
    lastName: "Spears",
    id: "9b3412d8",
    dateOfBirth: "1951-05-17",
    dateOfRegistration: "2021-09-02",
    favoriteColor: "green"
  },
  {
    firstName: "Habib",
    lastName: "Duran",
    id: "622fa867",
    dateOfBirth: "1960-03-26",
    dateOfRegistration: "2021-09-15",
    favoriteColor: "red"
  }
]

const resolvers = {
  Query: {
    async patient_list(): Promise<{ patients: Patient[] }> {
      await later(500);
      return {
        patients
      }
    },
  },
}

export const schema = makeExecutableSchema({ typeDefs, resolvers })

const server = new ApolloServer({
  schema,
})

export default startServerAndCreateNextHandler(server)