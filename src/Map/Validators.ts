/**
 * A set of helper functions to validate Map JSON files.
 */

import { IMap } from "./MapInterfaces"

const PROPERTIES = {
    LAYERS: [
        "name",
        "objects"
    ]
}

export function sceneMetadataExists(json: JSON): boolean {
    throw new Error("not yet implemented")
    return true
}

export function hasLayers(json: IMap): boolean {
    if (!json["layers"]) {
        console.error(`Required property "${"layers"}" not found.`)
        return false
    }
    return true
}

export function layersValid(json: any): boolean {
    let layers = json.layers
    let allPass = true
    for (let layer of layers) {
        PROPERTIES.LAYERS.forEach(prop => {
            if (!layer[prop]) {
                allPass = false
                let path = "<unnamed scene>"
                console.error(`Required property "${prop}" not found in "${path}".`)
            }
        })
    }
    return allPass
}

export function isObjectValid(json: JSON): boolean {
    throw new Error("not yet implemented")
    return true
}