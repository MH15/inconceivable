import { IPoint } from "pixi.js"

/**
 * Vector class fully interchangable with PIXI.IPoint.
 * Should also be compatible with any Vector class that
 * has both x and y fields.
 */
export class Vector2 implements PIXI.IPoint {
    x: number
    y: number
    constructor(x?: number, y?: number) {
        this.x = 0
        this.y = 0
        if (x) {
            this.x = x
        }
        if (y) {
            this.y = y
        }
    }
    set(x?: number, y?: number): void {
        this.x = x
        if (y) {
            this.y = y
        } else {
            this.y = x
        }
    }
    copyFrom(p: PIXI.IPoint): this {
        this.x = p.x
        this.y = p.y
        return this
    }
    copyTo(p: PIXI.IPoint): PIXI.IPoint {
        p.x = this.x
        p.y = this.y
        return p
    }
    equals(p: PIXI.IPoint): boolean {
        return p.x === this.x && p.y === this.y
    }
}

export class Vector3 extends Vector2 {
    z: number
    constructor(x: number, y: number, z: number) {
        super(x, y)
        this.z = z
    }
}