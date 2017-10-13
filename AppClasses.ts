import { SpaceCraft, ContainerShip} from './base-ships'
import { MillenniumFalcon } from './startfighter'

import * as _ from 'lodash'
console.log(_.pad("Typecript Exemplos", 40, "="))

let ship = new SpaceCraft('hyperdriver')

ship.jumpIntoHyperspace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes': 'no'}`)
