import { getJSON } from "../Utils/file"
import { hasLayers, layersValid } from "./Validators"
import GameObject from "../GameObjects/GameObject"
import { IMap } from "./MapInterfaces"
import { Vector2 } from "../Types/Vector"


import * as PIXI from "pixi.js"


export default class MapLoader {
    path: string = ""
    spritesheetPath: string
    spritesheet: PIXI.Spritesheet
    map: IMap
    layers = new Map<string, GameObject[]>()

    // layers to add to scene ASAP
    sceneLayers = new Set<GameObject>()

    constructor(path: string, spritesheet: string) {
        this.path = path
        this.spritesheetPath = spritesheet
    }

    load() {
        return new Promise((resolve, reject) => {
            getJSON(this.path).then((json) => {
                this.map = json

                // validation
                if (hasLayers(this.map) && layersValid(this.map)) {
                    PIXI.Loader.shared.add(this.spritesheetPath).load(() => {
                        this.spritesheet = PIXI.Loader.shared.resources[this.spritesheetPath].spritesheet
                        this.parseLayers()

                        resolve("haha bitch")
                    })
                } else {
                    throw new Error("Layer file defined incorrectly.")
                }
            })
        })
    }

    parseLayers() {
        for (let layer of this.map.layers) {
            let layerRoot = new GameObject(layer.name)
            let layerArray: GameObject[] = []
            for (let object of layer.objects) {
                let c = new GameObject("" || object.name)
                // position
                c.position = new Vector2(object.x, object.y)
                c.zIndex = object.z
                // rotation
                c.rotation = object.r || 0
                // scale
                c.scale = new Vector2(object.sx || 1, object.sy || 1)

                // image
                if (object.img) {
                    let tex = this.spritesheet.textures[object.img]
                    c.loadSprite(tex)
                }

                // add object to layer root
                layerRoot.addChild(c)
                layerArray.push(c)

                // TODO: implement recursive hierarchy support.
            }

            // add layer to Map
            this.layers.set(layer.name, layerArray)

            // is layer drawn in scene right away?
            if (layer.render !== false) {
                this.sceneLayers.add(layerRoot)
            }
        }
    }

    getLayer(layerName: string): GameObject[] {
        if (this.layers.has(layerName)) {
            return this.layers.get(layerName)
        } else {
            throw new Error(`No layer named "${layerName}" exists in the current context.`)
        }
    }
}



