# inconceivable
> a framework for modern web games

[![NPM Version][npm-image]][npm-url]

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/inconceivable?style=flat
[npm-url]: https://www.npmjs.com/package/inconceivable
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat

Inconceivable attempts to provide a framework for rapid game development that
promotes modern JavaScript and Typescript.

**inconceivable is under active development**

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



## Release History

* 0.2.1
    * CHANGE: Update docs (module code remains unchanged)
* 0.2.0
    * CHANGE: Remove `setDefaultXYZ()`
    * ADD: Add `init()`
* 0.1.1
    * FIX: Crash when calling `baz()` (Thanks @GenerousContributorName!)
* 0.1.0
    * The first proper release
    * CHANGE: Rename `foo()` to `bar()`
* 0.0.1
    * Work in progress

## Meta

Your Name – [@YourTwitter](https://twitter.com/dbader_org) – YourEmail@example.com

Distributed under the XYZ license. See ``LICENSE`` for more information.

[https://github.com/yourname/github-link](https://github.com/dbader/)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request


