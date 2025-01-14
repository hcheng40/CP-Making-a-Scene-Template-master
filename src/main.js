// Code Practice: Making a Scene
// Name: Hao-Tien Cheng
// Date: 2025/1/13

"use strict"

let config = {
    type: Phaser.AUTO, 
    scene: [ MainMenu, Play ], 
}

let game = new Phaser.Game(config)