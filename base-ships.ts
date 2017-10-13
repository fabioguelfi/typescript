class SpaceCraft {

  constructor(public propusor:string){}

  jumpIntoHyperspace() {
    console.log(`Entereing hyperspace with ${this.propusor}` )
  }
}

interface ContainerShip{
  cargoContainers: number
}

export {SpaceCraft, ContainerShip}
