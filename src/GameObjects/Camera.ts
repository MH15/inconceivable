import GameObject from "./GameObject"
import { Vector3, Vector2 } from "../Types/Vector"
import Scene from "../Scene/Scene"

/**
 * Cameras move the root scene GameObject in the reverse 
 * direction that is applied to the camera by the user.
 */
export default class Camera extends GameObject {
    stage: GameObject
    constructor(name: string) {
        super(name)
        this.stage = new GameObject("stage:Empty")
        this.addChild(this.stage)
    }

    addScene(scene: Scene) {
        this.stage.addChild(scene.root)
    }

    removeScene(scene) {
        throw new Error("removeScene not yet implemented.")
    }

    setPosition(pos: Vector2 | Vector3) {
        pos.x *= -1
        // pos.y *= -1
        this.stage.position = pos
    }

    /**
     * Translations applied to the Camera are implemented as if 
     * the stage has been moved in the opposite direction.
     * @param translation 
     */
    Translate(translation: Vector2 | Vector3) {
        translation.x *= -1
        translation.y *= -1
        this.stage.Translate(translation)
        if (translation instanceof Vector3) {
            let scaleValue = translation.z
            this.stage.scale = new Vector2(scaleValue, scaleValue)
        }
    }
}