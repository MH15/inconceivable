
var pjson = require('../package.json')

import Game from "./Scene/Game"
import Scene from "./Scene/Scene"
import * as Map from "./Map/MapLoader"
import GameObject from "./GameObjects/GameObject"
import Camera from "./GameObjects/Camera"


let Inconceivable = {
    version: pjson.version,
    Game: Game,
    Scene: Scene,
    Map: Map,
    GameObject: GameObject,
    Camera: Camera
}


export { Game, Scene, Map, GameObject, Camera }

export default Inconceivable

console.log(`Running inconceivable.`)