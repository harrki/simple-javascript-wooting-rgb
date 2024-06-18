# Simple Wooting RGB Library
## Overview
This JavaScript library is a simple wrapper library for [Wooting RGB SDK](https://github.com/WootingKb/wooting-rgb-sdk).

## Requirement
- Windows OS (10 or higher)
- Node.js (v20.x or higher)

## Installation
1. Download or compile `.dll` files of [Wooting RGB SDK](https://github.com/WootingKb/wooting-rgb-sdk), And put the file in the root directory of this library

    ```
    C:.
    │  jest.config.js
    │  package-lock.json
    │  package.json
    │  README.md
    │  wooting-rgb-sdk64.dll <- put .dll file
    │
    ├─node_modules
    │  └─ ...
    ├─src
    │     index.js
    │
    └─test
          index.test.js
    ```

2. Install this library in your Node.js projects
    ```bash
    cd your_nodejs_project
    npm install path/to/simple-javascript-wooting-rgb
    ```

## Usage
```javascript
const WootingRGB = require("simple-javascript-wooting-rgb");
// import * as WootingRGB from "simple-javascript-wooting-rgb";

WootingRGB.connectDevice();

let arrRGB = Array(WootingRGB.MAX_COLS * WootingRGB.MAX_ROWS * 3).fill(255);

WootingRGB.setArrayRGB(arrRGB);
WootingRGB.updateArrayRGB();

const sleep = ms => new Promise(res => setTimeout(res, ms));
await sleep(10000);

WootingRGB.resetRGB();
```

## Licence
This project is licensed under the Mozilla Public License Version 2.0 - see the [LICENSE](LICENSE) file for details.