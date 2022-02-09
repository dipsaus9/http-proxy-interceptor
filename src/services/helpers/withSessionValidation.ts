/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { validateSession } from "./validateSession"
import type { HttpClient, HttpCall } from "~/clients/httpClient"

export function withSessionValidation(client: HttpClient): HttpClient {
  const handler: ProxyHandler<HttpClient> = {
    get: (target, prop: keyof HttpClient, receiver): HttpCall => {
      const calledFunction: HttpCall = Reflect.get(target, prop, receiver)

      return async (...args) => {
        const isValidSession = await validateSession()

        if (!isValidSession) {
          throw new Error("User has no session")
        }

        return calledFunction(...args)
      }
    },
  }

  return new Proxy(client, handler)
}
