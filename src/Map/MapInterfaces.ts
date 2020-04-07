/**
 * A Map can contain multiple layers
 */
export interface IMap {
    layers: ILayer[]
}

/**
 * Each Layer has objects and metadata.
 */
export interface ILayer {
    name: string,
    // default true add to scene
    render?: boolean,
    // default true
    visible?: boolean
    objects: IObject[]
}


/**
 * An Object is the minimum information needed 
 * to construct a GameObject.
 */
export interface IObject {
    // name
    name?: string
    // position
    x: number,
    y: number,
    z: number
    // rotation
    r?: number
    // scale
    sx?: number
    sy?: number

    // image
    img?: string

}