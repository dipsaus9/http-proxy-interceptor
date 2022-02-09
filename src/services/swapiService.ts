import { createHttpClient } from "~/clients/httpClient"
import { withSessionValidation } from "./helpers/withSessionValidation"
import type { AllPeopleResponse } from "./types/People"

const httpClient = withSessionValidation(createHttpClient("https://swapi.dev/api"))

export const swapiService = {
  getAllPeople() {
    return httpClient
      .get<AllPeopleResponse>("/people")
      .then((response) => response.json())
      .then((people) => people.results)
  },
}
