import Scene from "./Scene"
import Camera from "../GameObjects/Camera"
import * as PIXI from "pixi.js"
// import Stats from "stats.js"
import { resolve } from "dns"


import * as Matter from "matter-js"



export default class Game {
    // only one instance of PIXI.Application per GameManager
    app: PIXI.Application


    // keyboard input events
    public events: Set<string>
    // scenes
    private scenes: Map<string, Scene>

    // stats
    // private stats: Stats

    // camera
    camera: Camera

    // physics
    matterEngine = Matter.Engine.create()

    constructor(parent: Element) {
        // global pixi instance
        window.PIXI = PIXI

        let width = window.innerWidth
        let height = window.innerHeight
        this.app = new PIXI.Application({ width, height, backgroundColor: 0x111111 })
        parent.appendChild(this.app.view)
        // (<any>window).app = this.app

        // Add a Camera
        this.camera = new Camera("Main Camera")

        this.scenes = new Map<string, Scene>()
        this.app.stage.addChild(this.camera)

        // start listeners for keyboard events
        this.setupEvents()

    }

    addScene(name: string, scene: Scene) {
        this.scenes.set(name, scene)
        scene.game = this

        if (scene.waitForLoad) {
            scene.on("scene:ready", () => {
                // console.log(scene.root)
                this.camera.addScene(scene)
            })
        } else {
            this.camera.addScene(scene)
        }
    }


    // Start all scenes: run their Start methods then their Update methods
    startAll() {
        let ticker = new PIXI.Ticker()
        ticker.autoStart = false
        ticker.stop()

        Matter.Engine.run(this.matterEngine)


        for (let entry of this.scenes) {
            let scene = entry[1]

            // make sure the scene is loaded from file before we start
            scene.on("scene:ready", () => {
                scene.Start()
                ticker.add((delta: number) => {
                    // console.log("t")
                    // Matter.Engine.update(this.matterEngine, delta)
                    scene.Update(delta)
                })
            })
            ticker.start()
        }
    }

    setupEvents() {
        this.events = new Set<string>()

        window.addEventListener('keydown', (e) => {
            this.events.add(e.key)
        }, false)

        window.addEventListener('keyup', (e) => {
            this.events.delete(e.key)
        }, false)

    }

}