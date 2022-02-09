import { swapiService } from "./services/swapiService"

(async () => {
  const allPeople = await swapiService.getAllPeople()

  console.log(allPeople)
})()
