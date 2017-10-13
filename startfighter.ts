import {SpaceCraft, ContainerShip} from './base-ships'

class MillenniumFalcon extends SpaceCraft implements ContainerShip {
  cargoContainers: number
  constructor(){
    super('hyperdriver')
    this.cargoContainers = 2
  }

  jumpIntoHyperspace(){
    if(Math.random() >= 0.5){
      super.jumpIntoHyperspace()
    }else {console.log('failed to jump into hyperspace')}
  }
}

export {MillenniumFalcon}
