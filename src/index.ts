
var pjson = require('../package.json')

import Game from "./Scene/Game"
import Scene from "./Scene/Scene"
import * as Map from "./Map/MapLoader"
import GameObject from "./GameObjects/GameObject"
import PhysicsObject from "./GameObjects/PhysicsObject"
import Camera from "./GameObjects/Camera"
import { Vector2, Vector3 } from "./Types/Vector"

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
    PhysicsObject: PhysicsObject,
    Camera: Camera,
    Matter: Matter,
    Vector2,
    Vector3
}


export { Game, Scene, Map, GameObject, Vector2, Vector3, PhysicsObject, Camera, Matter }

export default Inconceivable

console.log(`Running inconceivable.`)