import Game from './Game'
import { EventEmitter } from 'events'
import GameObject from '../GameObjects/GameObject'
import MapLoader from '../Map/MapLoader'


type UpdateFunction = (events) => void

/**
 * Scenes can be loaded from an archive JSON file or simply created empty.
 */
export default class Scene extends EventEmitter implements IScene {
    public keys: Set<string>

    sceneManager: Game
    private hierarchy: GameObject

    // TODO: comment on the event signals
    waitForLoad = true

    map: MapLoader
    world: any

    constructor(scenePath: string, sheetPath: string) {
        super()
        this.hierarchy = new GameObject("scene:" + scenePath)
        this.map = new MapLoader(scenePath, sheetPath)
        // Add a Camera


        Promise.all([this.map.load()]).then((data) => {
            for (let s of this.map.sceneLayers) {

                this.hierarchy.addChild(s)
            }
            console.log(this.map)
            this.emit("scene:ready")
        }).catch(err => {
            console.log("error")
            console.error(err)
        })

        // start listeners for keyboard events

        this.setupEvents()
    }



    get root() {
        return this.hierarchy
    }


    setupEvents() {
        this.keys = new Set<string>()

        window.addEventListener('keydown', (e) => {
            this.keys.add(e.key)
        }, false)

        window.addEventListener('keyup', (e) => {
            this.keys.delete(e.key)
        }, false)

    }


    findInScene(name: string): GameObject | PIXI.Container | null | PIXI.Sprite {
        let result = null
        if (this.hierarchy) {
            if (this.hierarchy) {
                try {

                    // result = this.hierarchy.root.findChild(name)

                    let node = this.hierarchy
                    function rec(node, name): any {
                        let a = null
                        if (node.children) {
                            for (let child of node.children) {
                                if (child.name) {
                                    if (child.name == name) {
                                        a = child
                                        break
                                    }

                                    if (child.children) {
                                        a = rec(child, name) || a
                                    }
                                }
                            }
                        }
                        return a
                    }

                    result = rec(this.hierarchy, name)

                } catch (err) {
                    console.log(err)
                }
            }
        } else {
            throw new Error("Cannot find GameObjects before scene loaded.")
        }
        return result
    }


    // prototypes
    Update(delta: number) { }
    Start() { }


}



interface IScene {
    sceneManager: Game
    Update(delta: number): void
    Start(): void
}