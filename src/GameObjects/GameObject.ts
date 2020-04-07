// Class that all game objects extend from
import * as PIXI from "pixi.js"
import * as Matter from "matter-js"

let debug = document.querySelector("#debug")



import { Vector2 } from "../Types/Vector"
import { round } from "../Utils/math"

// TODO: simplify this class to be a lower-level entity,
// TODO: then extend a PhysicsObject class from GameObject
export default class GameObject extends PIXI.Container {
	name: string
	sprite: PIXI.Sprite
	velocity: Vector2
	body: Matter.Body

	constructor(name: string) {
		super()
		this.name = name
		this.physics = true

		this.sortableChildren = true
	}

	set physics(setting: boolean) {
		if (setting) {
			this.velocity = new Vector2()
		}
	}

	addPhysics(tag: string, collision: Matter.ICollisionFilter, options?: OptionsObject): Matter.Body {
		let optionsObj: Matter.IBodyDefinition = {
			label: tag + ":" + this.name,
		}

		if (options) {
			if (options.isStatic) {
				optionsObj.isStatic = options.isStatic
			}
		}

		optionsObj.collisionFilter = collision

		this.body = Matter.Bodies.rectangle(
			this.x,
			this.y,
			this.width,
			this.height,
			optionsObj
		)
		return this.body
	}

	// Perhaps refactor into a class that extends
	// GameObject called PhysicsObject or something
	// later, but for now this should be ok.
	onCollide(callback: Function) {
		// @ts-ignore
		this.body.onCollide((event) => {
			let self = event.bodyA
			let other = event.bodyB
			if (self.label != this.body.label) {
				self = event.bodyB
				other = event.bodyA
			}
			let tag: string = other.label.split(":")[0]
			callback(tag, self, other)
		})
	}


	updatePhysics() {
		// copy properties from physics to renderer
		this.x = this.body.position.x
		this.y = this.body.position.y
		this.rotation = this.body.angle
	}

	loadAsset(path: string) {
		// TODO: implement spritesheets
		let spriteChild = PIXI.Sprite.from(path)
		// by default pivot sprites around the center
		spriteChild.anchor.x = 0.5
		spriteChild.anchor.y = 0.5
		// make the sprite accessible outside of the Container
		this.sprite = spriteChild
		// the sprite is rendered as a child of the Container
		this.addChild(spriteChild)
	}
	loadSprite(texture) {
		// TODO: implement spritesheets
		let spriteChild = new PIXI.Sprite(texture)
		// by default pivot sprites around the center
		spriteChild.anchor.x = 0.5
		spriteChild.anchor.y = 0.5
		// make the sprite accessible outside of the Container
		this.sprite = spriteChild
		// the sprite is rendered as a child of the Container
		this.addChild(spriteChild)
	}

	Translate(translation: Vector2) {
		this.x += translation.x
		this.y += translation.y
	}

	Rotate(rotation: number) {
		this.rotation += rotation
	}

	findChild(name: string): any {

		// if (this.isSprite) {
		// 	if (this.name == name) {
		// 		return this
		// 	}
		// 	return null
		// }

		let result = null

		for (let child of this.children) {
			console.log("child:", child)
			if (child.name == name) {
				result = child
				break
			}
			let newResult = null
			if ((<GameObject>child).findChild) {
				newResult = (<GameObject>child).findChild(name)
			}

			result = result || newResult
		}
		return result
	}

	log() {
		let logString = `pos: [${round(this.position.x)},${round(this.position.y)}], rot: ${round(this.rotation)}`
		debug.innerHTML = logString
	}

}



interface OptionsObject {
	isStatic?: boolean,
	collisionOptions?: number,
	collisionMask?: number
}