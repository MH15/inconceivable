# inconceivable
> a framework for modern web games

[![NPM Version][npm-image]][npm-url]

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/inconceivable?style=flat
[npm-url]: https://www.npmjs.com/package/inconceivable
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat

Inconceivable attempts to provide a framework for rapid game development that
promotes modern JavaScript and Typescript.

**inconceivable is under development, and not a production project**

<!-- ![](header.png) -->

## Installation

### NPM

```sh
npm i inconceivable
```

<!-- todo: allow download of bundle but recommend against it -->


## Features
- Map loaded and file format
- Spritesheet support (we suggest you use the amazing [SpriteSheet Packer](https://github.com/amakaseev/sprite-sheet-packer))
- Asset Server for maps, sprites and other static content
- unobstructed access to the [PIXI.js](https://github.com/pixijs/pixi.js?utm_source=html5weekly) and [Matter.js](https://github.com/liabru/matter-js) APIs

## Getting Started

We recommend using [Parcel](https://parceljs.org/) and
[Typescript](https://www.typescriptlang.org/) to develop games using this
framework. Using Parcel (or a similar bundler) will decrease the size of your
game (allowing more space for your *stunning* assets) and speed up your
development cycle through hot module replacement. We find that Typescript
reduces bugs in the development process, but if you choose to use vanilla
JavaScript, a type definition file is provided to help with IDE autocomplete signatures.

### Basic Project
<!-- todo: link to spritesheet -->
The simplest Inconceivable game has an entry file and a spritesheet.
```javascript

import { Game, Scene, GameObject } from "inconceivable"
let parent = document.querySelector("#game")

class MyScene extends Scene {
    Start() {

    }
    Update(delta) {
        
    }
}


```


## Meta

Created by Matt Hall - [@matthallosu](https://twitter.com/matthallosu) - matthew349hall@hotmail.com

Distributed under the MIT license. See ``LICENSE`` for more information.




## TODO
- [x] Error if Sprite in level file cannot be found in spritesheet.
  - [ ] Error on corrupted JSON.
  - [ ] Add a level layer property to allow nonrendered objects
- [x] Don't require hard reload on level file change.
  - [ ] Make Parcel hot reload on JSON changes
- [x] Create a Base Class for GameObjects with Physics support
  - [ ] Remove Physics methods from GameObject
- [ ] audio support
- [ ] Support Z index of layers
- [ ] global configuration file (`inconceivable.json`)
- [ ] change `Game()` constructor to take query string instead of HTMLElement.
