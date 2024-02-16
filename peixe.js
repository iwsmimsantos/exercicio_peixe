var config = {
    type: Phaser.AUTO,
    width: 1250, 
    height: 565,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
}

function create() { 
    this.add.image(625, 283, 'mar');
}

function update() { }
