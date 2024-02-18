    // conjunto de configurações básicas do nosso jogo. 
var config = {

    // Phaser.AUTO -- Escolha automática (pelo navegador) do tipo de renderizador da página web
    type: Phaser.AUTO,
    
    //indicam a largura e altura da tela do nosso jogo respectivamente
    width: 800, 
    height: 600,

    scene: {

        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    // carregar fundo
    this.load.image('mar', 'assets/bg_azul-escuro.png');

    //carregar logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    //carregar peixe
    this.load.image('peixe', 'assets/peixes/peixinho_laranja.png')

    //carregar bolhas (imagem extra)
    this.load.image('bolhas', 'assets/bolhas.avif');
}

function create() { 
    //adicionar fundo na tela 
    this.add.image(400, 300, 'mar');

    //adicionar logo na tela
    this.add.image(400, 525, 'logo').setScale(0.5);

    //adicionar peixe na tela, guardar o peixe em uma variável
    peixinho = this.add.image(400, 300, 'peixe');

    //transformando a variável
    peixinho.setOrigin(0.5, 0.5).setFlip(true, false);

    //adicionar bolhas na tela (imagem extra)
    this.add.image(100, 450, 'bolhas').setScale(0.3);
}

function update() { 
    //adicionando controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}
