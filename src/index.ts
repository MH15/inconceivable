
var pjson = require('../package.json')

import Game from "./Scene/Game"
import Scene from "./Scene/Scene"
import * as Map from "./Map/MapLoader"
import GameObject from "./GameObjects/GameObject"
import Camera from "./GameObjects/Camera"

import Matter from "matter-js"
import MatterCollisionEvents from "./External/matter-collision-events"
console.log(MatterCollisionEvents)
Matter.use("matter-collision-events")



let Inconceivable = {
    version: pjson.version,
    Game: Game,
    Scene: Scene,
    Map: Map,
    GameObject: GameObject,
    Camera: Camera,
    Matter: Matter
}


export { Game, Scene, Map, GameObject, Camera, Matter }

export default Inconceivable

console.log(`Running inconceivable.`)