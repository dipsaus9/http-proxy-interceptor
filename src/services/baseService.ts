import { createHttpClient } from "~/clients/httpClient"
import { withSessionValidation } from "./helpers/withSessionValidation"
import type { User } from "./types/User"

const httpClient = withSessionValidation(createHttpClient("https://6203c14e4d21c200170b9fdc.mockapi.io/api"))

export const baseService = {
  getUsers() {
    return httpClient.get<User[]>("/users").then((response) => response.json())
  },
  getUser(id: string) {
    return httpClient.get<User>(`/user/${id}`).then((response) => response.json())
  },
  setUser(id: string, body: User) {
    return httpClient
      .post<User>(`/user/${id}`, {
        body: JSON.stringify(body),
      })
      .then((response) => response.json())
  },
  updateUser(id: string, body: User) {
    return httpClient
      .put<User>(`/user/${id}`, {
        body: JSON.stringify(body),
      })
      .then((response) => response.json())
  },
  deleteUser(id: string) {
    return httpClient.delete<User>(`/user/${id}`).then((response) => response.json())
  },
}
