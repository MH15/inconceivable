import GameObject from "./GameObject"


/**
 * Base class for physics-enabled GameObjects. Programmers can create
 * classes that extend PhysicsObject to implement Walls, Players, Ladders,
 * Bullets, etc- anything that needs a bit more abstraction then a GameObject.
 */
export default class PhysicsObject {
    gameObject: GameObject
    body: Matter.Body

    // all PhysicsObject in the Scene can share the same Matter Physics world
    public static world: Matter.World

    constructor(gameObject: GameObject) {
        this.gameObject = gameObject
    }


    update() {
        this.gameObject.updatePhysics()
    }
}

/** History:
// TODO: perhaps find a way for Surface and Character to extend GameObject?
// Not sure if this would work. Maybe instead define a base class of
// PhysicsObject or something that has gameObject and body fields that is
// itself a wrapper for GameObject, to have Surface and Character extend from.
 */