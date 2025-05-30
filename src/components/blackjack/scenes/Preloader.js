import Phaser from 'phaser';

export class Preloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'Preloader'
        });
    }

    init() {
        //  We loaded this image in our Boot Scene, so we can display it here

        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(this.scale.width / 2, this.scale.height / 2, 468, 32).setStrokeStyle(1, 0xd4d4d8);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(this.scale.width / 2 - 230, this.scale.height / 2, 4, 28, 0xd4d4d8);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress) => {
            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);
        });
    }

    preload() {
        this.load.setPath("/assets/");

        this.load.atlas('cards', '/black-jack/atlases/cards.png', '/black-jack/atlases/cards.json');

        this.load.spritesheet('chips', '/black-jack/ui/chips.png', { frameWidth: 96, frameHeight: 96 });
        this.load.spritesheet('soundOnOffIcon', '/black-jack/ui/sound_on_off_icon.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('musicOnOffIcon', '/black-jack/ui/music_on_off_icon.png', { frameWidth: 64, frameHeight: 64 });

        
        this.load.image('background', '/black-jack/ui/bg5_2_comp.avif');
        this.load.image('background_menu', '/black-jack/ui/bg5_2_comp_menu.avif');
        this.load.image('menuButton', '/black-jack/ui/menu_button_image.png');
        this.load.image('closeButton', '/black-jack/ui/close_button_image.png');
        this.load.image('checkButtonGreen', '/black-jack/ui/check_button_image_green.png');
        this.load.image('closeButtonRed', '/black-jack/ui/close_button_image_red.png');
        this.load.image('checkButton80', '/black-jack/ui/check_button_image_80.png');
        this.load.image('cardBack', '/black-jack/ui/card_back_red.png');

        this.load.audio('chipSound_1', '/black-jack/sounds/Click - Tap_Done_Checkbox1.mp3');
        this.load.audio('chipSound_2', '/black-jack/sounds/Click - Tap_Done_Checkbox2.mp3');
        this.load.audio('chipSound_3', '/black-jack/sounds/Click - Tap_Done_Checkbox3.mp3');
        this.load.audio('chipSound_4', '/black-jack/sounds/Click - Tap_Done_Checkbox4.mp3');
        this.load.audio('chipSound_5', '/black-jack/sounds/Click - Tap_Done_Checkbox5.mp3');
        this.load.audio('chipSound_6', '/black-jack/sounds/Click - Tap_Done_Checkbox6.mp3');

        this.load.audio('music', '/black-jack/sounds/LoFi_Blackjack.mp3');
        this.load.audio('click', '/black-jack/sounds/Click_Done1.wav');
        this.load.audio('over', '/black-jack/sounds/Click - Tap.mp3');
        this.load.audio('dealSound_1', '/black-jack/sounds/JDSherbert - Tabletop Games SFX Pack - Deck Deal - 1.mp3');
        this.load.audio('dealSound_2', '/black-jack/sounds/JDSherbert - Tabletop Games SFX Pack - Deck Deal - 2.mp3');
       
        this.load.audio('dealAi', '/black-jack/sounds/playing_card_deal__UI.mp3');
        this.load.audio('dealAi2', '/black-jack/sounds/playing_card_deal__UI_2.mp3');
    }

    create() {
        this.scene.start("Play");
    }
}
