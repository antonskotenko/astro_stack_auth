import Phaser from 'phaser';

let langCode = navigator.language;
let lang = langCode[0] + langCode[1];

const langSetting = {
    betMessageText: {
        en: 'Place your bets',
        ru: 'Делайте ставку',
        ar: 'ضع رهاناتك',
        de: 'Platzieren Sie Ihre Wetten',
        es: 'Hagan sus apuestas',
        fr: 'Faites vos jeux',
        hi: 'अपना दांव लगाएं',
        it: 'Piazzare le scommesse',
        ja: '賭ける',
        ko: '베팅하기',
        pt: 'Faça as suas apostas',
        tr: 'Bahislerinizi oynayın',
        zh: '下注',
        vi: 'Đặt cược của bạn'
    },
    dealerName: {
        en: 'Dealer',
        ru: 'Дилер',
        ar: 'الموزع',
        de: 'Dealer',
        es: 'Al crupier',
        fr: 'Le croupier',
        hi: 'डीलर',
        it: 'Il croupier',
        ja: 'ディーラー',
        ko: '딜러',
        pt: 'O crupiê',
        tr: 'Krupiye',
        zh: '经销商',
        vi: 'Đại lý'
    },
    playerName: {
        en: 'Player',
        ru: 'Игрок',
        ar: 'اللاعب',
        de: 'Spieler',
        es: 'Jugador',
        fr: 'Joueur',
        hi: 'खिलाड़ी',
        it: 'Giocatore',
        ja: '選手',
        ko: '플레이어',
        pt: 'Jogador',
        tr: 'Oyuncu',
        zh: '球员',
        vi: 'người chơi'
    },
    gameWinText: {
        en: 'You won',
        ru: 'Вы выиграли',
        ar: 'لقد فزت',
        de: 'Sie haben gewonnen',
        es: 'Has ganado',
        fr: 'Vous avez gagné',
        hi: 'आप जीत गए',
        it: 'Hai vinto',
        ja: 'あなたの勝ち',
        ko: '이겼습니다',
        pt: 'Ganhou',
        tr: 'Sen kazandın',
        zh: '你赢了',
        vi: 'Bạn đã thắng',
    },
    gameLostText: {
        en: 'You lost',
        ru: 'Вы проиграли',
        ar: 'لقد خسرت',
        de: 'Sie haben verloren',
        es: 'Has perdido',
        fr: 'Vous avez perdu',
        hi: 'तुम हार गए',
        it: 'Hai perso',
        ja: 'あなたは失った',
        ko: '패배',
        pt: 'Perdeu',
        tr: 'Sen kaybettin',
        zh: '你输了',
        vi: 'Bạn bị mất',
    },
    oneToOneText: {
        en: 'Get a 1:1 win?',
        ru: 'Получить выигрыш 1:1?',
        ar: 'هل تفوز بـ 1:1؟',
        de: 'Einen 1:1-Sieg erzielen?',
        es: '¿Obtener una victoria 1:1?',
        fr: 'Obtenir une victoire 1:1 ?',
        hi: '1:1 जीत प्राप्त करें?',
        it: 'Ottenere una vittoria 1:1?',
        ja: '1対1で勝つ？',
        ko: '1:1 승리를 얻으시겠습니까?',
        pt: 'Conseguir uma vitória 1:1?',
        tr: '1:1 kazanç elde et?',
        zh: '获得 1:1 的胜利？',
        vi: 'Nhận chiến thắng 1:1?'
    },
    insuranceResultText: {
        en: 'You got the insurance',
        ru: 'Вы получили страховку',
        ar: 'حصلت على التأمين',
        de: 'Sie haben die Versicherung',
        es: 'Tienes el seguro',
        fr: 'Vous avez l \'assurance',
        hi: 'आप बीमा मिल गया',
        it: 'Hai l\'assicurazione',
        ja: '保険に入る',
        ko: '보험 가입',
        pt: 'Tem o seguro',
        tr: 'Sigortan var',
        zh: '你买了保险',
        vi: 'Bạn có bảo hiểm'
    },
    insuranceOfferText: {
        en: 'Do you need insurance?',
        ru: 'Вам нужна страховка?',
        ar: '您需要保险吗？',
        de: 'Brauchen Sie eine Versicherung?',
        es: '¿Necesita un seguro?',
        fr: 'Avez-vous besoin d\'une assurance ?',
        hi: 'क्या आपको बीमा की आवश्यकता है?',
        it: 'Avete bisogno di un\'assicurazione?',
        ja: '保険は必要ですか？',
        ko: '보험이 필요하신가요?',
        pt: 'Precisa de um seguro?',
        tr: 'Sigortaya ihtiyacınız var mı?',
        zh: '您需要保险吗？',
        vi: 'Bạn có cần bảo hiểm không?'
    },
    tieText: {
        en: 'Tie',
        ru: 'Ничья',
        ar: 'تعادل',
        de: 'Unentschieden',
        es: 'Empate',
        fr: 'Égalité',
        hi: 'बराबरी',
        it: 'Pareggio',
        ja: '引き分け',
        ko: '무승부',
        pt: 'Empate',
        tr: 'Beraberlik',
        zh: 'Hòa',
        vi: '平局',
    },
}

const gameSetting = {
    soundVolume: 1,
    musicVolume: 1,
    sound: true,
    music: false,
    languages: ['English', 'Русский', 'اَلْعَرَبِيَّةُ', 'Deutsch', 'español', 'français', 'हिन्दी', 'italiano', '日本語', '한국어', 'português', 'türkçe', 'Tiếng Việt', '中文'],
    languagesCodes: ['en', 'ru', 'ar', 'de', 'es', 'fr', 'hi', 'it', 'ja', 'ko', 'pt', 'tr', 'vi', 'zh'],
    currentLang: lang,
    numberCards: 52,
    cardNumber: null,
    betChipsFrames: [],
    chipsValue: [1, 2, 5, 10, 50, 100],
    playerСhips: [],
    betChips: [],
    betCount: 0,
    betInsuranceCount: 0,
    betChipsCount: 0,
    previousBet: 10,
    playerСredits: 100,
    playerScore: 0,
    dealerScore: 0,
    deckOfCards: [],
    playerCards: [],
    dealerCards: [],
    playerRankCards: [],
    dealerRankCards: [],
    firstSplitCards: [],
    secondSplitCards: [],
    playerFirstAce: false,
    playerLoweringAce: false,
    dealerFirstAce: false,
    dealerLoweringAce: false,
    cardPosition: {
        dynamicCardPosition: [
            [333],
            [333, 477],
            [261, 405, 549],
            [189, 333, 477, 621],
            [117, 261, 405, 549, 693],
            [205, 285, 365, 445, 525, 605],
            [165, 245, 325, 405, 485, 565, 645],
            [125, 205, 285, 365, 445, 525, 605, 685],
            [181, 237, 293, 349, 405, 461, 517, 573, 629],
            [153, 209, 265, 321, 377, 433, 489, 545, 601, 657],
            [125, 181, 237, 293, 349, 405, 461, 517, 573, 629, 685],
            [97, 153, 209, 265, 321, 377, 433, 489, 545, 601, 657, 713]
        ],
        split: [
            [405],
            [261, 405, 549],
        ],
        player: {
            firstCardPosition: 333,
            secondCardPosition: 477,
            dynamicCardPosition: [
                // [128, 200, 272],
                // [92, 164, 236, 308],
                // [120, 160, 200, 240, 280],
                // [100, 140, 180, 220, 260, 300],
                // [80, 120, 160, 200, 240, 280, 320],

                // [80, 104, 128, 152, 176, 200, 224, 248, 272, 296, 320],
                // [80, 104, 128, 152, 176, 200, 224, 248, 272, 296, 320, 344]



                [261, 405, 549],
                [189, 333, 477, 621],
                [117, 261, 405, 549, 693],
                [205, 285, 365, 445, 525, 605],
                [165, 245, 325, 405, 485, 565, 645],
                [125, 205, 285, 365, 445, 525, 605, 685],
                [181, 237, 293, 349, 405, 461, 517, 573, 629],
                [153, 209, 265, 321, 377, 433, 489, 545, 601, 657],
                [125, 181, 237, 293, 349, 405, 461, 517, 573, 629, 685],
                [97, 153, 209, 265, 321, 377, 433, 489, 545, 601, 657, 713]
            ]
        }
    }
}

console.log(gameSetting.currentLang);

export class Play extends Phaser.Scene {
    constructor() {
        super('Play');
    }

    create() {
        // for (let i = 0; i < gameSetting.betChips.length; i++) {
        //     this.children.getByName(gameSetting.betChips[i]).destroy();
        // }
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'background');

        this.sound.add('chipSound_1');
        this.sound.add('chipSound_2');
        this.sound.add('chipSound_3');
        this.sound.add('chipSound_4');
        this.sound.add('chipSound_5');
        this.sound.add('chipSound_6');

        this.sound.add('music');

        const clickSound = this.sound.add('click');
        const overSound = this.sound.add('over');
        const dealSound_1 = this.sound.add('dealAi').setMute();
        const dealSound_2 = this.sound.add('dealAi2').setVolume(0.5);

        // function cardsChecking(frame) {
        //     switch (frame) {
        //         case '1c':
        //         case '1d':
        //         case '1h':
        //         case '1s':
        //             gameSetting.suitCard = 'ace';
        //             if (firstAce == 0) {
        //                 firstAce = 11;
        //                 gameSetting.playerScore += firstAce;
        //                 console.log('Есть туз 11 очков!')
        //             } else if (firstAce == 11) {
        //                 gameSetting.playerScore += 1;
        //                 console.log('Есть туз 1 очко!')
        //             } else if (firstAce == 1) {
        //                 gameSetting.playerScore += 1;
        //                 console.log('Есть туз 1 очко!')
        //             }
        //             break;
        //         case '13c':
        //         case '13d':
        //         case '13h':
        //         case '13s':
        //         case '12c':
        //         case '12d':
        //         case '12h':
        //         case '12s':
        //         case '11c':
        //         case '11d':
        //         case '11h':
        //         case '11s':
        //             gameSetting.suitCard = 'picture';
        //             gameSetting.playerScore += 10;
        //             break;
        //         case '10c':
        //         case '10d':
        //         case '10h':
        //         case '10s':
        //             gameSetting.suitCard = '10';
        //             gameSetting.playerScore += 10;
        //             break;
        //         case '9c':
        //         case '9d':
        //         case '9h':
        //         case '9s':
        //             gameSetting.suitCard = '9';
        //             gameSetting.playerScore += 9;
        //             break;
        //         case '8c':
        //         case '8d':
        //         case '8h':
        //         case '8s':
        //             gameSetting.suitCard = '8';
        //             gameSetting.playerScore += 8;
        //             break;
        //         case '7c':
        //         case '7d':
        //         case '7h':
        //         case '7s':
        //             gameSetting.suitCard = '7';
        //             gameSetting.playerScore += 7;
        //             break;
        //         case '6c':
        //         case '6d':
        //         case '6h':
        //         case '6s':
        //             gameSetting.suitCard = '6';
        //             gameSetting.playerScore += 6;
        //             break;
        //         case '5c':
        //         case '5d':
        //         case '5h':
        //         case '5s':
        //             gameSetting.suitCard = '5';
        //             gameSetting.playerScore += 5;
        //             break;
        //         case '4c':
        //         case '4d':
        //         case '4h':
        //         case '4s':
        //             gameSetting.suitCard = '4';
        //             gameSetting.playerScore += 4;
        //             break;
        //         case '3c':
        //         case '3d':
        //         case '3h':
        //         case '3s':
        //             gameSetting.suitCard = '3';
        //             gameSetting.playerScore += 3;
        //             break;
        //         case '2c':
        //         case '2d':
        //         case '2h':
        //         case '2s':
        //             gameSetting.suitCard = '2';
        //             gameSetting.playerScore += 2;
        //             break;
        //     }

        //     // if (gameSetting.playerScore > 21) {
        //     //     if (firstAce == 11) {
        //     //         firstAce = 1;
        //     //         gameSetting.playerScore -= 10;
        //     //         console.log('Очков' + gameSetting.playerScore);
        //     //         if (gameSetting.playerScore > 21) {
        //     //             console.log('Проигрыш!');
        //     //         }
        //     //     }
        //     // }
        // }

        function cardsChecking(frame) {
            switch (frame) {
                case '1c':
                case '1d':
                case '1h':
                case '1s':
                    cardRank = 'ace';
                    break;
                case '13c':
                case '13d':
                case '13h':
                case '13s':
                case '12c':
                case '12d':
                case '12h':
                case '12s':
                case '11c':
                case '11d':
                case '11h':
                case '11s':
                    cardRank = 'picture';
                    score = 10;
                    break;
                case '10c':
                case '10d':
                case '10h':
                case '10s':
                    cardRank = '10';
                    score = 10;
                    break;
                case '9c':
                case '9d':
                case '9h':
                case '9s':
                    cardRank = '9';
                    score = 9;
                    break;
                case '8c':
                case '8d':
                case '8h':
                case '8s':
                    cardRank = '8';
                    score = 8;
                    break;
                case '7c':
                case '7d':
                case '7h':
                case '7s':
                    cardRank = '7';
                    score = 7;
                    break;
                case '6c':
                case '6d':
                case '6h':
                case '6s':
                    cardRank = '6';
                    score = 6;
                    break;
                case '5c':
                case '5d':
                case '5h':
                case '5s':
                    cardRank = '5';
                    score = 5;
                    break;
                case '4c':
                case '4d':
                case '4h':
                case '4s':
                    cardRank = '4';
                    score = 4;
                    break;
                case '3c':
                case '3d':
                case '3h':
                case '3s':
                    cardRank = '3';
                    score = 3;
                    break;
                case '2c':
                case '2d':
                case '2h':
                case '2s':
                    cardRank = '2';
                    score = 2;
                    break;
            }
        }

        let dealPlayerCard = (frame) => {
            // frame = Phaser.Utils.Array.RemoveRandomElement(frames);

            cardNumber = gameSetting.deckOfCards.length;

            cardsChecking(frame);

            if (cardRank == 'ace') {
                if (gameSetting.playerFirstAce == false) {
                    gameSetting.playerFirstAce = true;
                    gameSetting.playerScore += 11;
                } else {
                    gameSetting.playerScore += 1;
                }
            } else {
                gameSetting.playerScore += score;
            }

            gameSetting.playerRankCards[gameSetting.playerRankCards.length] = cardRank;

            this.tweens.add({
                targets: this.children.getByName('card_' + cardNumber),
                x: gameSetting.cardPosition.dynamicCardPosition[gameSetting.playerCards.length][gameSetting.playerCards.length],
                y: 576,
                scale: { value: 1, duration: 200, delay: 200 },
                scaleX: { value: 0, duration: 200, delay: 400, yoyo: true },
                texture: { value: ['cards', frame], duration: 200, delay: 400 },
                ease: 'Quad',
                duration: 200,
                delay: 0,
            });

            this.sound.play(('chipSound_' + (Phaser.Math.Between(1, 6))), { volume: gameSetting.soundVolume });

            this.children.bringToTop(this.children.getByName('card_' + cardNumber));

            Phaser.Utils.Array.RemoveAt(gameSetting.deckOfCards, (cardNumber - 1));

            dealerCardCount.text = gameSetting.deckOfCards.length;

            Phaser.Utils.Array.Add(gameSetting.playerCards, 'card_' + cardNumber);

            if (gameSetting.playerScore > 21) {
                if (gameSetting.playerFirstAce == true) {
                    if (gameSetting.playerLoweringAce == false) {
                        gameSetting.playerLoweringAce = true;
                        gameSetting.playerScore -= 10;
                        playerScoreText.setVisible(true);
                        playerScoreText.text = gameSetting.playerScore;
                    }
                }
            }

            // setTimeout(() => {
            //     if (gameSetting.playerScore > 21) {
            //         if (gameSetting.playerFirstAce == true) {
            //             if (gameSetting.playerLoweringAce == false) {
            //                 gameSetting.playerLoweringAce = true;
            //                 gameSetting.playerScore -= 10;
            //                 playerScoreText.setVisible(true);
            //                 playerScoreText.text = gameSetting.playerScore;
            //             }
            //         }
            //     } else {
            //         playerScoreText.text = gameSetting.playerScore;
            //         playerScoreText.setVisible(true);
            //     }
            // }, 800);
        }

        let showResult = (result) => {
            gameResultMessage.list[1].text = langSetting[result][gameSetting.currentLang];
            this.children.bringToTop(gameResultMessage);
            gameResultMessage.setVisible(true);

            buttonDouble.setVisible(false);
            buttonSplit.setVisible(false);
            buttonHit.setVisible(false);
            buttonStand.setVisible(false);

            // buttonNext.setVisible(true);
        }

        let dealDealerCard = (frame) => {
            // frame = Phaser.Utils.Array.RemoveRandomElement(frames);

            cardNumber = gameSetting.deckOfCards.length;

            cardsChecking(frame);

            if (cardRank == 'ace') {
                if (gameSetting.dealerFirstAce == false) {
                    gameSetting.dealerFirstAce = true;
                    gameSetting.dealerScore += 11;
                } else {
                    gameSetting.dealerScore += 1;
                }
            } else {
                gameSetting.dealerScore += score;
            }

            gameSetting.dealerRankCards[gameSetting.dealerRankCards.length] = cardRank;

            this.tweens.add({
                targets: this.children.getByName('card_' + cardNumber),
                x: gameSetting.cardPosition.dynamicCardPosition[gameSetting.dealerCards.length][gameSetting.dealerCards.length],
                y: 280,
                scale: { value: 1, duration: 200, delay: 200 },
                scaleX: { value: 0, duration: 200, delay: 400, yoyo: true },
                texture: { value: ['cards', frame], duration: 200, delay: 400 },
                ease: 'Quad',
                duration: 200,
                delay: 0,
            });

            this.sound.play(('chipSound_' + (Phaser.Math.Between(1, 6))), { volume: gameSetting.soundVolume });

            this.children.bringToTop(this.children.getByName('card_' + cardNumber));

            Phaser.Utils.Array.RemoveAt(gameSetting.deckOfCards, (cardNumber - 1));

            dealerCardCount.text = gameSetting.deckOfCards.length;

            Phaser.Utils.Array.Add(gameSetting.dealerCards, 'card_' + cardNumber);

            if (gameSetting.dealerScore > 21) {
                if (gameSetting.dealerFirstAce == true) {
                    if (gameSetting.dealerLoweringAce == false) {
                        gameSetting.dealerLoweringAce = true;
                        gameSetting.dealerScore -= 10;
                        dealerScoreText.setVisible(true);
                        dealerScoreText.text = gameSetting.dealerScore;
                    }
                }
            }

            // setTimeout(() => {
            //     if (gameSetting.dealerScore > 21) {
            //         if (gameSetting.dealerFirstAce == true) {
            //             if (gameSetting.dealerLoweringAce == false) {
            //                 gameSetting.dealerLoweringAce = true; dealer
            //                 gameSetting.dealerScore -= 10;
            //                 dealerScoreText.setVisible(true);
            //                 dealerScoreText.text = gameSetting.dealerScore;
            //             }
            //         }
            //     } else {
            //         dealerScoreText.text = gameSetting.dealerScore;
            //         dealerScoreText.setVisible(true);
            //     }
            // }, 800);
        }

        let dealDealerCloseCard = () => {
            cardNumber = 49;

            this.tweens.add({
                targets: this.children.getByName('card_' + cardNumber),
                x: gameSetting.cardPosition.dynamicCardPosition[gameSetting.dealerCards.length][gameSetting.dealerCards.length],
                y: 280,
                scale: { value: 1, duration: 200, delay: 200 },
                ease: 'Quad',
                duration: 200,
                delay: 0,
            });

            this.sound.play(('chipSound_' + (Phaser.Math.Between(1, 6))), { volume: gameSetting.soundVolume });

            this.children.bringToTop(this.children.getByName('card_' + cardNumber));

            Phaser.Utils.Array.RemoveAt(gameSetting.deckOfCards, (cardNumber - 1));

            dealerCardCount.text = gameSetting.deckOfCards.length;

            Phaser.Utils.Array.Add(gameSetting.dealerCards, 'card_' + cardNumber);
        }

        let openDealerCloseCard = (frame) => {
            // frame = Phaser.Utils.Array.RemoveRandomElement(frames);

            cardsChecking(frame);

            if (cardRank == 'ace') {
                if (gameSetting.dealerFirstAce == false) {
                    gameSetting.dealerFirstAce = true;
                    gameSetting.dealerScore += 11;
                } else {
                    gameSetting.dealerScore += 1;
                }
            } else {
                gameSetting.dealerScore += score;
            }

            if (gameSetting.dealerScore > 21) {
                if (gameSetting.dealerFirstAce == true) {
                    if (gameSetting.dealerLoweringAce == false) {
                        gameSetting.dealerLoweringAce = true;
                        gameSetting.dealerScore -= 10;
                        dealerScoreText.setVisible(true);
                        dealerScoreText.text = gameSetting.dealerScore;
                    }
                }
            }

            gameSetting.dealerRankCards[gameSetting.dealerRankCards.length] = cardRank;

            this.tweens.add({
                targets: this.children.getByName('card_49'),
                scaleX: { value: 0, duration: 200, delay: 200, yoyo: true },
                texture: { value: ['cards', frame], duration: 200, delay: 200 },
                ease: 'Quad',
                duration: 200,
                delay: 0,
            });
            this.sound.play(('chipSound_' + (Phaser.Math.Between(1, 6))), { volume: gameSetting.soundVolume });



            // setTimeout(() => {
            //     if (gameSetting.dealerScore > 21) {
            //         if (gameSetting.dealerFirstAce == true) {
            //             if (gameSetting.dealerLoweringAce == false) {
            //                 gameSetting.dealerLoweringAce = true; dealer
            //                 gameSetting.dealerScore -= 10;
            //                 dealerScoreText.setVisible(true);
            //                 dealerScoreText.text = gameSetting.dealerScore;
            //             }
            //         }
            //     } else {
            //         dealerScoreText.text = gameSetting.dealerScore;
            //         dealerScoreText.setVisible(true);
            //     }
            // }, 800);
        }

        // let addCard = () => {
        //     console.log('У дилера меньше 17');
        //     console.log(gameSetting.deckOfCards);
        //     console.log(gameSetting.dealerCards);
        //     console.log(cardNumber);



        //     for (let i = 0; i < gameSetting.dealerCards.length; i++) {
        //         this.tweens.add({
        //             targets: this.children.getByName(gameSetting.dealerCards[i]),
        //             x: gameSetting.cardPosition.dynamicCardPosition[gameSetting.dealerCards.length][i],
        //             ease: 'Quad',
        //             duration: 400,
        //             delay: 0
        //         });
        //     }

        //     frame = Phaser.Utils.Array.RemoveRandomElement(frames);

        //     frame = '1s'

        //     cardNumber = gameSetting.deckOfCards.length;

        //     cardsChecking(frame);

        //     if (cardRank == 'ace') {
        //         if (gameSetting.dealerFirstAce == false) {
        //             gameSetting.dealerFirstAce = true;
        //             gameSetting.dealerScore += 11;
        //         } else {
        //             gameSetting.dealerScore += 1;
        //         }
        //     } else {
        //         gameSetting.dealerScore += score;
        //     }

        //     gameSetting.dealerRankCards[gameSetting.dealerRankCards.length] = cardRank;

        //     setTimeout(() => {
        //         this.tweens.add({
        //             targets: this.children.getByName('card_' + cardNumber),
        //             x: gameSetting.cardPosition.dynamicCardPosition[gameSetting.dealerCards.length][gameSetting.dealerCards.length],
        //             y: 280,
        //             scale: { value: 1, duration: 200, delay: 200 },
        //             scaleX: { value: 0, duration: 200, delay: 400, yoyo: true },
        //             texture: { value: ['cards', frame], duration: 200, delay: 400 },
        //             ease: 'Quad',
        //             duration: 200,
        //             delay: 0,
        //         });
        //         this.sound.play(('chipSound_' + (Phaser.Math.Between(1, 6))), { volume: gameSetting.soundVolume });

        //         this.children.bringToTop(this.children.getByName('card_' + cardNumber));

        //         Phaser.Utils.Array.RemoveAt(gameSetting.deckOfCards, (cardNumber - 1));

        //         dealerCardCount.text = gameSetting.deckOfCards.length;

        //         Phaser.Utils.Array.Add(gameSetting.dealerCards, 'card_' + cardNumber);

        //         if (gameSetting.dealerScore > 21) {
        //             if (gameSetting.dealerFirstAce == true) {
        //                 if (gameSetting.dealerLoweringAce == false) {
        //                     gameSetting.dealerLoweringAce = true;
        //                     gameSetting.dealerScore -= 10;
        //                     dealerScoreText.text = gameSetting.dealerScore;

        //                     if (gameSetting.dealerScore > 21) {
        //                         buttonHit.setVisible(false);
        //                         buttonStand.setVisible(false);

        //                         setTimeout(() => {
        //                             gameResultMessage.list[1].text = langSetting['gameWinText'][gameSetting.currentLang];
        //                             this.children.bringToTop(gameResultMessage);
        //                             gameResultMessage.setVisible(true);
        //                             dealerScoreText.text = gameSetting.dealerScore;
        //                         }, 1400);
        //                     }
        //                 } else {
        //                     buttonHit.setVisible(false);
        //                     buttonStand.setVisible(false);

        //                     setTimeout(() => {
        //                         gameResultMessage.list[1].text = langSetting['gameWinText'][gameSetting.currentLang];
        //                         this.children.bringToTop(gameResultMessage);
        //                         gameResultMessage.setVisible(true);
        //                         dealerScoreText.text = gameSetting.dealerScore;
        //                     }, 1400);
        //                 }
        //             } else {
        //                 buttonHit.setVisible(false);
        //                 buttonStand.setVisible(false);

        //                 setTimeout(() => {
        //                     gameResultMessage.list[1].text = langSetting['gameWinText'][gameSetting.currentLang];
        //                     this.children.bringToTop(gameResultMessage);
        //                     gameResultMessage.setVisible(true);
        //                     dealerScoreText.text = gameSetting.dealerScore;
        //                 }, 1400);
        //             }
        //         }
        //     }, 800);

        //     setTimeout(() => {
        //         dealerScoreText.text = gameSetting.dealerScore;
        //         console.log(gameSetting.deckOfCards);
        //         console.log(gameSetting.dealerCards);
        //         console.log(cardNumber);
        //     }, 2200);
        // }



        //Menu button
        let createMenuButton = () => {
            const menuButton = this.add.image(64, 128, 'menuButton')
                .setScale(1)
                .setInteractive()
                .on('pointerover', () => { menuButton.setScale(1) })
                .on('pointerout', () => { menuButton.setScale(1) })
                .on('pointerdown', () => { menuButton.setScale(.95) })
                .on('pointerup', () => {
                    menuButton.setScale(1);

                    this.scene.launch('Menu')
                    this.scene.pause();

                });
        }
        createMenuButton();

        let oneToOneDialog;
        let createOneToOneDialog = () => {
            let checkButtonOneToOne = this.add.image(-280, 0, 'checkButtonGreen')
                .setScale(1)
                .setInteractive()
                .on('pointerover', () => { checkButtonOneToOne.setScale(1) })
                .on('pointerout', () => { checkButtonOneToOne.setScale(1) })
                .on('pointerdown', () => { checkButtonOneToOne.setScale(.95) })
                .on('pointerup', () => {
                    checkButtonOneToOne.setScale(1);
                    oneToOneDialog.setVisible(false);

                    gameSetting.playerСredits += gameSetting.betCount * 2;

                    gameResultMessage.list[1].text = langSetting['gameWinText'][gameSetting.currentLang];
                    this.children.bringToTop(gameResultMessage);
                    gameResultMessage.setVisible(true);

                    buttonCheckGame.setVisible(true);
                });

            let closeButtonOneToOne = this.add.image(280, 0, 'closeButtonRed')
                .setScale(1)
                .setInteractive()
                .on('pointerover', () => { closeButtonOneToOne.setScale(1) })
                .on('pointerout', () => { closeButtonOneToOne.setScale(1) })
                .on('pointerdown', () => { closeButtonOneToOne.setScale(.95) })
                .on('pointerup', () => {
                    closeButtonOneToOne.setScale(1);
                    oneToOneDialog.setVisible(false);

                    openDealerCloseCard('9h');

                    setTimeout(() => {
                        if (gameSetting.dealerScore == 21) {
                            gameSetting.playerСredits += gameSetting.betCount;

                            gameResultMessage.list[1].text = langSetting['tieText'][gameSetting.currentLang];
                            this.children.bringToTop(gameResultMessage);
                            gameResultMessage.setVisible(true);

                            buttonCheckGame.setVisible(true);
                        } else {
                            gameSetting.playerСredits += gameSetting.betCount * 2.5;

                            gameResultMessage.list[1].text = langSetting['gameWinText'][gameSetting.currentLang];
                            this.children.bringToTop(gameResultMessage);
                            gameResultMessage.setVisible(true);

                            buttonCheckGame.setVisible(true);
                        }
                    }, 800);
                });

            oneToOneDialog = this.add.container(this.scale.width / 2, 576, [
                this.add.graphics()
                    .fillStyle(0xF5F5F5, 1)
                    .fillRoundedRect(-360, -40, 720, 80, 16)
                    .lineStyle(2, 0x000000, 1)
                    .strokeRoundedRect(-360, -40, 720, 80, 16),

                this.add.text(0, -6, '', {
                    fontFamily: 'alsContract',
                    fontSize: '40px',
                    color: '#222222',
                })
                    .setOrigin(0.5),

                checkButtonOneToOne,
                closeButtonOneToOne,
            ])
                .setVisible(false);
        }
        createOneToOneDialog();

        let insuranceDialog;
        let createInsuranceDialog = () => {
            let checkButtonInsurance = this.add.image(-280, 0, 'checkButtonGreen')
                .setScale(1)
                .setInteractive()
                .on('pointerover', () => { checkButtonInsurance.setScale(1) })
                .on('pointerout', () => { checkButtonInsurance.setScale(1) })
                .on('pointerdown', () => { checkButtonInsurance.setScale(.95) })
                .on('pointerup', () => {
                    checkButtonInsurance.setScale(1);
                    insuranceDialog.setVisible(false);

                    gameSetting.betInsuranceCount = gameSetting.betCount / 2;
                    gameSetting.playerСredits -= gameSetting.betInsuranceCount;

                    playerName.text = langSetting.playerName[lang] + '  $' + gameSetting.playerСredits
                    betText.text = '$' + gameSetting.betCount + ' ' + '+' + ' ' + '$' + gameSetting.betInsuranceCount;

                    buttonHit.setVisible(true);
                    buttonStand.setVisible(true);
                });

            let closeButtonInsurance = this.add.image(280, 0, 'closeButtonRed')
                .setScale(1)
                .setInteractive()
                .on('pointerover', () => { closeButtonInsurance.setScale(1) })
                .on('pointerout', () => { closeButtonInsurance.setScale(1) })
                .on('pointerdown', () => { closeButtonInsurance.setScale(.95) })
                .on('pointerup', () => {
                    closeButtonInsurance.setScale(1);
                    insuranceDialog.setVisible(false);

                    buttonHit.setVisible(true);
                    buttonStand.setVisible(true);
                    if (gameSetting.playerСredits >= gameSetting.betCount) {
                        buttonDouble.setVisible(true);
                        // buttonSplit.setVisible(true);
                    }
                });

            insuranceDialog = this.add.container(this.scale.width / 2, 576, [
                this.add.graphics()
                    .fillStyle(0xF5F5F5, 1)
                    .fillRoundedRect(-360, -40, 720, 80, 16)
                    .lineStyle(2, 0x000000, 1)
                    .strokeRoundedRect(-360, -40, 720, 80, 16),

                this.add.text(0, -6, '', {
                    fontFamily: 'alsContract',
                    fontSize: '40px',
                    color: '#222222',
                })
                    .setOrigin(0.5),

                checkButtonInsurance,
                closeButtonInsurance,
            ])
                .setVisible(false);
        }
        createInsuranceDialog();

        let slidePlayerCards = () => {
            for (let i = 0; i < gameSetting.playerCards.length; i++) {
                this.tweens.add({
                    targets: this.children.getByName(gameSetting.playerCards[i]),
                    x: gameSetting.cardPosition.dynamicCardPosition[gameSetting.playerCards.length][i],
                    ease: 'Quad',
                    duration: 400,
                    delay: 0
                });
            }
        }

        let slideDealerCards = () => {
            for (let i = 0; i < gameSetting.dealerCards.length; i++) {
                this.tweens.add({
                    targets: this.children.getByName(gameSetting.dealerCards[i]),
                    x: gameSetting.cardPosition.dynamicCardPosition[gameSetting.dealerCards.length][i],
                    ease: 'Quad',
                    duration: 400,
                    delay: 0
                });
            }
        }

        let frames = this.textures.get('cards').getFrameNames();

        this.graphics = this.add.graphics();

        this.graphics.fillStyle(0xA3A3A3, 0.1);
        this.graphics.lineStyle(4, 0x737373, 1);

        this.graphics.fillRect(0, 0, 810, 64);
        this.graphics.lineBetween(0, 2, 810, 2);

        this.graphics.fillRect(0, 1016, 810, 64);
        this.graphics.lineBetween(0, 1078, 810, 1078);

        const betMessageText = this.add.text(this.scale.width / 2, 428, langSetting.betMessageText[lang], {
            fontFamily: 'alsContract',
            fontSize: '48px',
            color: '#F5F5F5',
        })
            .setName('betMessageText')
            .setOrigin(0.5);

        const dealerName = this.add.text(405, 16, langSetting.dealerName[lang], {
            fontFamily: 'alsContract',
            fontSize: '28px',
            color: '#F5F5F5',
        })
            .setName('dealerName')
            .setOrigin(0.5, 0);

        const playerName = this.add.text(405, 1064, langSetting.playerName[lang] + '  $' + gameSetting.playerСredits, {
            fontFamily: 'alsContract',
            fontSize: '28px',
            color: '#F5F5F5',
        })
            .setName('playerName')
            .setOrigin(0.5, 1);

        const betText = this.add.text(this.scale.width / 2, 704, '$' + gameSetting.betCount, {
            fontFamily: 'alsContract',
            fontSize: '32px',
            color: '#F5F5F5',
        })
            .setOrigin(0.5);

        const firstSplitBetText = this.add.text(this.scale.width / 2 - 200, 704, '$' + gameSetting.betCount, {
            fontFamily: 'alsContract',
            fontSize: '32px',
            color: '#F5F5F5',
        })
            .setOrigin(0.5)
            .setVisible(false);

        const secondSplitBetText = this.add.text(this.scale.width / 2 + 200, 704, '$' + gameSetting.betCount, {
            fontFamily: 'alsContract',
            fontSize: '32px',
            color: '#F5F5F5',
        })
            .setOrigin(0.5)
            .setVisible(false);

        const dealerScoreText = this.add.text(this.scale.width / 2, 400, gameSetting.dealerScore, {
            fontFamily: 'alsContract',
            fontSize: '32px',
            color: '#F5F5F5',
        })
            .setOrigin(0.5)
            .setVisible(false);

        const playerScoreText = this.add.text(this.scale.width / 2, 456, gameSetting.playerScore, {
            fontFamily: 'alsContract',
            fontSize: '32px',
            color: '#F5F5F5',
        })
            .setOrigin(0.5)
            .setVisible(false);

        // const buttonDealGraphics = this.add.graphics()
        //     .fillStyle(0xfde047, 1)
        //     .fillRoundedRect(-80, -32, 160, 64, 16)
        //     .lineStyle(2, 0x000000, 1)
        //     .strokeRoundedRect(-80, -32, 160, 64, 16);

        // const buttonDealText = this.add.text(0, -6, 'deal', {
        //     fontFamily: 'alsContract',
        //     fontSize: '48px',
        //     color: '#222222',
        // }).setOrigin(0.5);

        // let gameResult;

        const gameResultMessage = this.add.container(this.scale.width / 2, 576, [
            this.add.graphics()
                .fillStyle(0xF5F5F5, 1)
                .fillRoundedRect(-360, -40, 720, 80, 16)
                .lineStyle(2, 0x000000, 1)
                .strokeRoundedRect(-360, -40, 720, 80, 16),

            this.add.text(0, -6, '', {
                fontFamily: 'alsContract',
                fontSize: '40px',
                color: '#222222',
            })
                .setOrigin(0.5)
        ])
            .setVisible(false);





        // const gameResultText = this.add.text(this.scale.width / 2, 576, langSetting.gameWinText[lang], {
        //     fontFamily: 'alsContract',
        //     fontSize: '32px',
        //     color: '#F5F5F5',
        // })
        //     .setOrigin(0.5)
        //     .setVisible(false);

        const gameFirstSplitResultText = this.add.text(this.scale.width / 2 + 200, 576, langSetting.gameWinText[lang], {
            fontFamily: 'alsContract',
            fontSize: '32px',
            color: '#F5F5F5',
        })
            .setOrigin(0.5)
            .setVisible(false);

        const gameSecondSplitResultText = this.add.text(this.scale.width / 2 - 200, 576, langSetting.gameWinText[lang], {
            fontFamily: 'alsContract',
            fontSize: '32px',
            color: '#F5F5F5',
        })
            .setOrigin(0.5)
            .setVisible(false);

        const gameLostText = this.add.text(405, 576, langSetting.gameLostText[lang], {
            fontFamily: 'alsContract',
            fontSize: '48px',
            color: '#F5F5F5',
        })
            .setOrigin(0.5)
            .setVisible(false);

        for (let i = 0; i < gameSetting.numberCards; i++) {
            this.add.image(405, 128, 'cardBack').setScale(0.5).setName('card_' + (i + 1));
            Phaser.Utils.Array.Add(gameSetting.deckOfCards, 'card_' + (i + 1));
        }

        const dealerCardCount = this.add.text(405, 128, gameSetting.numberCards, {
            fontFamily: 'alsContract',
            fontSize: '32px',
            color: '#F5F5F5',
        })
            .setOrigin(0.5)
            .setVisible(true);

        //Place for chips
        this.graphics.lineStyle(4, 0xF5F5F5, 1);
        const betCircle = new Phaser.Geom.Point(405, 800);
        const betCircleRadius = 62;
        this.graphics.strokeCircle(betCircle.x, betCircle.y, betCircleRadius);

        //Bet chips
        let betChip;
        let chipX = 165;

        for (let i = 0; i < gameSetting.chipsValue.length; i++) {
            setTimeout(() => {
                let chip = this.add.image(chipX, 936, 'chips').setFrame(i).setName('chip_' + (gameSetting.playerСhips.length + 1));
                Phaser.Utils.Array.Add(gameSetting.playerСhips, chip.name);

                if (gameSetting.playerСredits < gameSetting.chipsValue[i]) {
                    chip.setVisible(false);
                }

                chip.setInteractive()
                    .on('pointerover', () => { chip.setScale(1) })
                    .on('pointerout', () => { chip.setScale(1) })
                    .on('pointerdown', () => { chip.setScale(.95) })
                    .on('pointerup', () => {
                        chip.setScale(1);
                        this.sound.play(('chipSound_' + (i + 1)), { volume: gameSetting.soundVolume });

                        gameSetting.betChipsCount++;

                        betChip = this.add.image(chip.x, chip.y, 'chips').setFrame(i).setName('betChip_' + gameSetting.betChipsCount);
                        gameSetting.betChipsFrames[gameSetting.betChips.length] = i;
                        Phaser.Utils.Array.Add(gameSetting.betChips, betChip.name);

                        this.tweens.add({
                            targets: betChip,
                            x: Phaser.Math.FloatBetween(405 - 8, 405 + 8),
                            y: Phaser.Math.FloatBetween(800 - 8, 800 + 8),
                            ease: 'Quad',
                            duration: 400,
                            delay: 0
                        });

                        gameSetting.playerСredits -= gameSetting.chipsValue[i];
                        gameSetting.betCount += gameSetting.chipsValue[i];

                        for (let j = 0; j < gameSetting.chipsValue.length; j++) {
                            if (gameSetting.playerСredits >= gameSetting.chipsValue[j]) {
                                this.children.getByName('chip_' + (j + 1)).setVisible(true);
                            } else {
                                this.children.getByName('chip_' + (j + 1)).setVisible(false);
                            }
                        }

                        playerName.text = langSetting.playerName[gameSetting.currentLang] + '  $' + gameSetting.playerСredits;
                        betText.text = '$' + gameSetting.betCount;

                        betMessageText.setVisible(false);
                        buttonClear.setVisible(true);
                        buttonDeal.setVisible(true);
                    });

                chipX += 96;
            }, 100 * (i + 1));
        }

        let frame;
        let cardNumber;
        let cardRank;
        let score = 0;

        const buttonDealGraphics = this.add.graphics()
            .fillStyle(0xfde047, 1)
            .fillRoundedRect(-80, -32, 160, 64, 16)
            .lineStyle(2, 0x000000, 1)
            .strokeRoundedRect(-80, -32, 160, 64, 16);

        const buttonDealText = this.add.text(0, -6, 'deal', {
            fontFamily: 'alsContract',
            fontSize: '48px',
            color: '#222222',
        }).setOrigin(0.5);

        const buttonDeal = this.add.container((this.scale.width / 2) - 184, 800, [buttonDealGraphics, buttonDealText])
            .setScale(1)
            .setSize(180, 64)
            .setInteractive()
            .setVisible(false)
            .on('pointerover', () => { buttonDealGraphics.setScale(1), buttonDealText.setScale(1) })
            .on('pointerout', () => { buttonDealGraphics.setScale(1), buttonDealText.setScale(1) })
            .on('pointerdown', () => { buttonDealGraphics.setScale(.95), buttonDealText.setScale(.95) })
            .on('pointerup', () => {
                buttonDealGraphics.setScale(1);
                buttonDealText.setScale(1);
                buttonDeal.setVisible(false);

                //Save previous bet
                gameSetting.previousBet = gameSetting.betCount;

                //Hide the clear button
                buttonClear.setVisible(false);

                //Hide the chips
                for (let i = 0; i < gameSetting.playerСhips.length; i++) {
                    this.children.getByName('chip_' + (i + 1)).setVisible(false);
                }

                //Give the player the first card
                setTimeout(() => {
                    dealPlayerCard('5h');
                }, 400);

                //Give the player a second card
                setTimeout(() => {
                    dealPlayerCard('5c');
                }, 800);

                //Give the dealer the first card
                setTimeout(() => {
                    dealDealerCard('5h');
                }, 1200);

                //Give the dealer a closed card
                setTimeout(() => {
                    dealDealerCloseCard();
                }, 1600);

                setTimeout(() => {
                    playerScoreText.text = gameSetting.playerScore;
                    playerScoreText.setVisible(true);
                    dealerScoreText.text = gameSetting.dealerScore;
                    dealerScoreText.setVisible(true);
                }, 2000);

                //Show points
                setTimeout(() => {
                    if (gameSetting.playerScore == 21) {
                        if (gameSetting.dealerRankCards[0] == 'ace') {
                            console.log('Забрать по коэффициенту 1:1');

                            oneToOneDialog.list[1].text = langSetting.oneToOneText[gameSetting.currentLang];
                            this.children.bringToTop(oneToOneDialog);
                            oneToOneDialog.setVisible(true);
                        } else if (gameSetting.dealerRankCards[0] == 'picture' || gameSetting.dealerRankCards[0] == '10') {
                            console.log('Дилер открывает вторую карту');
                            setTimeout(() => {
                                openDealerCloseCard();

                                setTimeout(() => {
                                    if (gameSetting.playerScore > gameSetting.dealerScore) {
                                        console.log('Вы выграли');

                                        gameSetting.playerСredits += gameSetting.betCount * 2;

                                        gameSetting.betCount = 0;

                                        betText.text = gameSetting.betCount;

                                        playerName.text = langSetting.playerName[gameSetting.currentLang] + '  $' + gameSetting.playerСredits;

                                        gameResultMessage.list[1].text = langSetting.gameWinText[gameSetting.currentLang];
                                        this.children.bringToTop(gameResultMessage);
                                        gameResultMessage.setVisible(true);

                                        buttonNext.setVisible(true);
                                    } else {
                                        console.log('Ничья');

                                        gameResultMessage.list[1].text = langSetting.tieText[gameSetting.currentLang];
                                        this.children.bringToTop(gameResultMessage);
                                        gameResultMessage.setVisible(true);

                                        buttonNext.setVisible(true);
                                    }
                                }, 1200);
                            }, 400);
                        } else {
                            console.log('Вы выиграли');
                            gameSetting.playerСredits += gameSetting.betCount * 2.5;

                            gameResultMessage.list[1].text = langSetting.gameWinText[gameSetting.currentLang];
                            this.children.bringToTop(gameResultMessage);
                            gameResultMessage.setVisible(true);

                            buttonCheckGame.setVisible(true);
                            console.log(gameSetting.playerСredits)
                        }
                    } else {
                        if (gameSetting.dealerRankCards[0] == 'ace') {
                            if (gameSetting.playerСredits >= gameSetting.betCount / 2) {
                                console.log('Предложение страховки');

                                insuranceDialog.list[1].text = langSetting.insuranceOfferText[gameSetting.currentLang];
                                this.children.bringToTop(insuranceDialog);
                                insuranceDialog.setVisible(true);
                            }
                        } else {
                            //Show button Hit and Stand
                            if (gameSetting.playerRankCards[0] == gameSetting.playerRankCards[1]) {
                                console.log('одинаковые');
                                buttonHit.setVisible(true);
                                buttonStand.setVisible(true);
                                if (gameSetting.playerСredits >= gameSetting.betCount) {
                                    buttonDouble.setVisible(true);
                                    buttonSplit.setVisible(true);
                                }
                            } else {
                                console.log('неодинаковые');
                                buttonHit.setVisible(true);
                                buttonStand.setVisible(true);
                                if (gameSetting.playerСredits >= gameSetting.betCount) {
                                    buttonDouble.setVisible(true);
                                }
                            }
                        }
                    }
                }, 2400)
            });

        //button Clear
        const buttonClearGraphics = this.add.graphics()
            .fillStyle(0x93c5fd, 1)
            .fillRoundedRect(-80, -32, 160, 64, 16)
            .lineStyle(2, 0x000000, 1)
            .strokeRoundedRect(-80, -32, 160, 64, 16);
        const buttonClearText = this.add.text(0, -6, 'clear', {
            fontFamily: 'alsContract',
            fontSize: '48px',
            color: '#222222',
        }).setOrigin(0.5);

        const buttonClear = this.add.container((this.scale.width / 2) + 184, 800, [buttonClearGraphics, buttonClearText])
            .setScale(1)
            .setSize(180, 64)
            .setInteractive()
            .setVisible(false)
            .on('pointerover', () => { buttonClearGraphics.setScale(1), buttonClearText.setScale(1) })
            .on('pointerout', () => { buttonClearGraphics.setScale(1), buttonClearText.setScale(1) })
            .on('pointerdown', () => { buttonClearGraphics.setScale(.95), buttonClearText.setScale(.95) })
            .on('pointerup', () => {
                buttonClearGraphics.setScale(1);
                buttonClearText.setScale(1);
                // placedChips.removeAll(true);
                gameSetting.playerСredits += gameSetting.betCount;
                playerName.text = langSetting.playerName[gameSetting.currentLang] + '  $' + gameSetting.playerСredits;
                gameSetting.betCount = 0;
                betText.text = '$' + gameSetting.betCount;

                for (let i = 0; i < gameSetting.betChips.length; i++) {
                    this.children.getByName('betChip_' + (i + 1)).setVisible(false);
                }

                for (let j = 0; j < gameSetting.chipsValue.length; j++) {
                    if (gameSetting.playerСredits >= gameSetting.chipsValue[j]) {
                        this.children.getByName('chip_' + (j + 1)).setVisible(true);
                    } else {
                        this.children.getByName('chip_' + (j + 1)).setVisible(false);
                    }
                }

                buttonClear.setVisible(false);
                buttonDeal.setVisible(false);

                betMessageText.setVisible(true);

                if (gameSetting.previousBet == 0) {
                    buttonRebet.setVisible(false);
                } else {
                    buttonRebet.setVisible(true);
                }
                console.log(gameSetting.betChips);
            });

        //button Rebet
        const buttonRebetGraphics = this.add.graphics()
            .fillStyle(0xd4d4d4, 1)
            .fillRoundedRect(-80, -32, 160, 64, 16)
            .lineStyle(2, 0x000000, 1)
            .strokeRoundedRect(-80, -32, 160, 64, 16);
        const buttonRebetText = this.add.text(0, -6, 'rebet', {
            fontFamily: 'alsContract',
            fontSize: '48px',
            color: '#222222',
        }).setOrigin(0.5);

        const buttonRebet = this.add.container((this.scale.width / 2) + 184, 800, [buttonRebetGraphics, buttonRebetText])
            .setScale(1)
            .setSize(180, 64)
            .setInteractive()
            .setVisible(false)
            .on('pointerover', () => { buttonRebetGraphics.setScale(1), buttonRebetText.setScale(1) })
            .on('pointerout', () => { buttonRebetGraphics.setScale(1), buttonRebetText.setScale(1) })
            .on('pointerdown', () => { buttonRebetGraphics.setScale(.95), buttonRebetText.setScale(.95) })
            .on('pointerup', () => {
                buttonRebetGraphics.setScale(1);
                buttonRebetText.setScale(1);
                // placedChips.removeAll(true);
                gameSetting.playerСredits -= gameSetting.previousBet;
                playerName.text = 'Игрок ' + ' $' + gameSetting.playerСredits;
                gameSetting.betCount = 0; //??????
                betText.text = '$' + gameSetting.previousBet;

                for (let j = 0; j < gameSetting.chipsValue.length; j++) {
                    if (gameSetting.playerСredits >= gameSetting.chipsValue[j]) {
                        this.children.getByName('chip_' + (j + 1)).setVisible(true);
                    } else {
                        this.children.getByName('chip_' + (j + 1)).setVisible(false);
                    }
                }

                for (let i = 0; i < gameSetting.betChips.length; i++) {
                    this.children.getByName('betChip_' + (i + 1))
                        .setX(Phaser.Math.FloatBetween(405 - 8, 405 + 8))
                        .setY(Phaser.Math.FloatBetween(800 - 8, 800 + 8))
                        .setVisible(true);
                }

                buttonClear.setVisible(true);
                buttonDeal.setVisible(true);
                buttonRebet.setVisible(false);
            });

        const buttonHitGraphics = this.add.graphics()
            .fillStyle(0x86efac, 1)
            .fillRoundedRect(-80, -32, 160, 64, 16)
            .lineStyle(2, 0x000000, 1)
            .strokeRoundedRect(-80, -32, 160, 64, 16);
        const buttonHitText = this.add.text(0, -6, 'hit', {
            fontFamily: 'alsContract',
            fontSize: '48px',
            color: '#222222',
        }).setOrigin(0.5);

        const buttonHit = this.add.container((this.scale.width / 2) - 184, 936, [buttonHitGraphics, buttonHitText])
            .setScale(1)
            .setSize(180, 64)
            .setInteractive()
            .setVisible(false)
            .on('pointerover', () => { buttonHitGraphics.setScale(1), buttonHitText.setScale(1) })
            .on('pointerout', () => { buttonHitGraphics.setScale(1), buttonHitText.setScale(1) })
            .on('pointerdown', () => { buttonHitGraphics.setScale(.95), buttonHitText.setScale(.95) })
            .on('pointerup', () => {
                buttonHitGraphics.setScale(1);
                buttonHitText.setScale(1);

                buttonHit.setVisible(false);
                buttonStand.setVisible(false);
                buttonSplit.setVisible(false);
                buttonDouble.setVisible(false);

                slidePlayerCards();

                dealPlayerCard();

                setTimeout(() => {
                    playerScoreText.text = gameSetting.playerScore;
                    dealerScoreText.text = gameSetting.dealerScore;
                }, 2400);





                // setTimeout(() => {

                //     // Counting the player's points
                //     if (gameSetting.playerScore > 21) {
                //         if (gameSetting.playerFirstAce == true) {
                //             if (gameSetting.playerLoweringAce == false) {
                //                 gameSetting.playerLoweringAce = true;
                //                 gameSetting.playerScore -= 10;
                //                 playerScoreText.text = gameSetting.playerScore;

                //                 if (gameSetting.playerScore > 21) {
                //                     buttonHit.setVisible(false);
                //                     buttonStand.setVisible(false);

                //                     setTimeout(() => {
                //                         gameResultMessage.list[1].text = langSetting['gameLostText'][gameSetting.currentLang];
                //                         this.children.bringToTop(gameResultMessage);
                //                         gameResultMessage.setVisible(true);
                //                         playerScoreText.text = gameSetting.playerScore;
                //                     }, 1400);
                //                 }
                //             } else {
                //                 buttonHit.setVisible(false);
                //                 buttonStand.setVisible(false);

                //                 setTimeout(() => {
                //                     gameResultMessage.list[1].text = langSetting['gameLostText'][gameSetting.currentLang];
                //                     this.children.bringToTop(gameResultMessage);
                //                     gameResultMessage.setVisible(true);
                //                     playerScoreText.text = gameSetting.playerScore;
                //                 }, 1400);
                //             }
                //         } else {
                //             buttonHit.setVisible(false);
                //             buttonStand.setVisible(false);

                //             setTimeout(() => {
                //                 gameResultMessage.list[1].text = langSetting['gameLostText'][gameSetting.currentLang];
                //                 this.children.bringToTop(gameResultMessage);
                //                 gameResultMessage.setVisible(true);
                //                 playerScoreText.text = gameSetting.playerScore;
                //             }, 1400);
                //         }
                //     } else if (gameSetting.playerScore == 21) {
                //         console.log('Собрал 21');

                //         playerScoreText.text = gameSetting.playerScore;


                //         setTimeout(() => {
                //             dealerScoreText.text = gameSetting.dealerScore;

                //             if (gameSetting.dealerScore == 21) {
                //                 console.log('У дилера 21');

                //                 //Проверить страховку от блэкджека

                //                 setTimeout(() => {
                //                     gameResultMessage.list[1].text = langSetting['gameLostText'][gameSetting.currentLang];

                //                     this.children.bringToTop(gameResultMessage);

                //                     gameResultMessage.setVisible(true);
                //                 }, 1200);
                //             } else if (gameSetting.dealerScore < 17) {

                //                 addCard();
                //                 setTimeout(() => {
                //                     addCard();
                //                 }, 2400);


                //             }
                //         }, 1200);

                //         // setTimeout(() => {

                //         // }, 800);
                //     } else {
                //         setTimeout(() => {
                //             buttonHit.setVisible(true);
                //             buttonStand.setVisible(true);
                //             playerScoreText.text = gameSetting.playerScore;
                //         }, 800);
                //     }
                // }, 800);
            });

        const buttonStandGraphics = this.add.graphics()
            .fillStyle(0xfca5a5, 1)
            .fillRoundedRect(-80, -32, 160, 64, 16)
            .lineStyle(2, 0x000000, 1)
            .strokeRoundedRect(-80, -32, 160, 64, 16);
        const buttonStandText = this.add.text(0, -6, 'stand', {
            fontFamily: 'alsContract',
            fontSize: '48px',
            color: '#222222',
        }).setOrigin(0.5);

        const buttonStand = this.add.container((this.scale.width / 2) + 184, 936, [buttonStandGraphics, buttonStandText])
            .setScale(1)
            .setSize(180, 64)
            .setInteractive()
            .setVisible(false)
            .on('pointerover', () => { buttonStandGraphics.setScale(1), buttonStandText.setScale(1) })
            .on('pointerout', () => { buttonStandGraphics.setScale(1), buttonStandText.setScale(1) })
            .on('pointerdown', () => { buttonStandGraphics.setScale(.95), buttonStandText.setScale(.95) })
            .on('pointerup', () => {
                buttonStandGraphics.setScale(1);
                buttonStandText.setScale(1);
                buttonStand.setVisible(false);


                setTimeout(() => {

                }, 400);


            });

        const buttonSplitGraphics = this.add.graphics()
            .fillStyle(0x93c5fd, 1)
            .fillRoundedRect(-80, -32, 160, 64, 16)
            .lineStyle(2, 0x000000, 1)
            .strokeRoundedRect(-80, -32, 160, 64, 16);
        const buttonSplitText = this.add.text(0, -6, 'split', {
            fontFamily: 'alsContract',
            fontSize: '48px',
            color: '#222222',
        }).setOrigin(0.5);

        const buttonSplit = this.add.container((this.scale.width / 2) + 184, 800, [buttonSplitGraphics, buttonSplitText])
            .setScale(1)
            .setSize(180, 64)
            .setInteractive()
            .setVisible(false)
            .on('pointerover', () => { buttonSplitGraphics.setScale(1), buttonSplitText.setScale(1) })
            .on('pointerout', () => { buttonSplitGraphics.setScale(1), buttonSplitText.setScale(1) })
            .on('pointerdown', () => { buttonSplitGraphics.setScale(.95), buttonSplitText.setScale(.95) })
            .on('pointerup', () => {
                buttonSplitGraphics.setScale(1);
                buttonSplitText.setScale(1);
                buttonSplit.setVisible(false);

                Phaser.Utils.Array.Add(gameSetting.firstSplitCards, gameSetting.playerCards[0]);
                Phaser.Utils.Array.Add(gameSetting.secondSplitCards, gameSetting.playerCards[1]);

                this.tweens.add({
                    targets: this.children.getByName('card_52'),
                    x: gameSetting.cardPosition.split[0][0] - 200,
                    y: 576,
                    // scale: { value: 1, duration: 200, delay: 200 },
                    // scaleX: { value: 0, duration: 200, delay: 400, yoyo: true },
                    // texture: { value: ['cards', frame], duration: 200, delay: 400 },
                    ease: 'Quad',
                    duration: 200,
                    delay: 0,
                });

                this.tweens.add({
                    targets: this.children.getByName('card_51'),
                    x: gameSetting.cardPosition.split[0][0] + 200,
                    y: 576,
                    // scale: { value: 1, duration: 200, delay: 200 },
                    // scaleX: { value: 0, duration: 200, delay: 400, yoyo: true },
                    // texture: { value: ['cards', frame], duration: 200, delay: 400 },
                    ease: 'Quad',
                    duration: 200,
                    delay: 0,
                });

                betText.setVisible(false);

                firstSplitBetText.text = '$' + gameSetting.betCount;
                secondSplitBetText.text = '$' + gameSetting.betCount;
                firstSplitBetText.setVisible(true);
                secondSplitBetText.setVisible(true);

                gameSetting.playerСredits -= gameSetting.betCount;
                gameSetting.betCount += gameSetting.betCount;
                playerName.text = 'Игрок ' + ' $' + gameSetting.playerСredits;
                betText.text = '$' + gameSetting.betCount;

                for (let i = 0; i < gameSetting.betChipsFrames.length; i++) {
                    gameSetting.betChipsCount++;

                    betChip = this.add.image(Phaser.Math.FloatBetween(405 - 8, 405 + 8), Phaser.Math.FloatBetween(800 - 8, 800 + 8), 'chips')
                        .setFrame(gameSetting.betChipsFrames[i])
                        .setName('betChip_' + gameSetting.betChipsCount);

                    Phaser.Utils.Array.Add(gameSetting.betChips, betChip.name);
                }

                // console.log(gameResult)

                // gameResult = 'gameWinText'

                // gameResultText.list[1].text = langSetting[gameResult][gameSetting.currentLang]

                // gameResultText.setVisible(true);

                // this.children.bringToTop(gameResultText);


                // console.log('карты игрока ' + gameSetting.playerCards.name);



                // console.log('первый сплит ' + gameSetting.firstSplitCards);
                // console.log('второй сплит ' + gameSetting.secondSplitCards);
                // gameSetting.playerCards = [];

                // console.log('карты игрока ' + gameSetting.playerCards);
                // console.log('первый сплит ' + gameSetting.firstSplitCards);
                // console.log('второй сплит ' + gameSetting.secondSplitCards);

            });

        const buttonDoubleGraphics = this.add.graphics()
            .fillStyle(0xfde047, 1)
            .fillRoundedRect(-80, -32, 160, 64, 16)
            .lineStyle(2, 0x000000, 1)
            .strokeRoundedRect(-80, -32, 160, 64, 16);
        const buttonDoubleText = this.add.text(0, -6, 'double', {
            fontFamily: 'alsContract',
            fontSize: '48px',
            color: '#222222',
        }).setOrigin(0.5);

        const buttonDouble = this.add.container((this.scale.width / 2) - 184, 800, [buttonDoubleGraphics, buttonDoubleText])
            .setScale(1)
            .setSize(180, 64)
            .setInteractive()
            .setVisible(false)
            .on('pointerover', () => { buttonDoubleGraphics.setScale(1), buttonDoubleText.setScale(1) })
            .on('pointerout', () => { buttonDoubleGraphics.setScale(1), buttonDoubleText.setScale(1) })
            .on('pointerdown', () => { buttonDoubleGraphics.setScale(.95), buttonDoubleText.setScale(.95) })
            .on('pointerup', () => {
                buttonDoubleGraphics.setScale(1);
                buttonDoubleText.setScale(1);
                buttonDouble.setVisible(false);

                gameSetting.playerСredits -= gameSetting.betCount;
                gameSetting.betCount += gameSetting.betCount;
                playerName.text = 'Игрок ' + ' $' + gameSetting.playerСredits;
                betText.text = '$' + gameSetting.betCount;

                for (let i = 0; i < gameSetting.betChipsFrames.length; i++) {
                    gameSetting.betChipsCount++;

                    betChip = this.add.image(Phaser.Math.FloatBetween(405 - 8, 405 + 8), Phaser.Math.FloatBetween(800 - 8, 800 + 8), 'chips')
                        .setFrame(gameSetting.betChipsFrames[i])
                        .setName('betChip_' + gameSetting.betChipsCount);

                    Phaser.Utils.Array.Add(gameSetting.betChips, betChip.name);
                }

                slidePlayerCards();
                dealPlayerCard('2h');

                setTimeout(() => {
                    openDealerCloseCard('10s');
                }, 800);

                setTimeout(() => {
                    playerScoreText.text = gameSetting.playerScore;
                    dealerScoreText.text = gameSetting.dealerScore;
                }, 1600);

                setTimeout(() => {
                    if (gameSetting.playerScore > 21) {
                        console.log('вы проиграли дабл');

                        showResult('gameLostText');
                    } else if (gameSetting.playerScore < gameSetting.dealerScore) {
                        console.log('вы проиграли дабл');
                        
                        showResult('gameLostText');
                    } else if (gameSetting.dealerScore < 17) {
                        let addingDealerCards = () => {
                            slideDealerCards();
                            dealDealerCard('1s');

                            if (cardRank == 'ace') {
                                if (gameSetting.dealerScore >= 17) {
                                    gameSetting.dealerLoweringAce = true;
                                    gameSetting.dealerScore -= 10;
                                }
                            }

                            playerScoreText.text = gameSetting.playerScore;
                            dealerScoreText.text = gameSetting.dealerScore;

                            if (gameSetting.dealerScore < 17) {
                                setTimeout(() => {
                                    if (gameSetting.dealerCards.length < 12) {
                                        addingDealerCards();
                                    } else {
                                        console.log('Maximum cards.')

                                        showResult('gameWinText');
                                    }
                                }, 800)
                            } else {
                                if (gameSetting.playerScore > gameSetting.dealerScore) {
                                    console.log('Вы виграли!!!');

                                    showResult('gameWinText');
                                } else {
                                    console.log('Вы проиграли!!!');
                                    
                                    showResult('gameLostText');
                                }
                            }
                        }

                        setTimeout(() => {
                            addingDealerCards();
                        }, 1400)
                    }
                }, 2000);
            });

        // const buttonNextGraphics = this.add.graphics()
        //     .fillStyle(0xd4d4d4, 1)
        //     .fillRoundedRect(-80, -32, 160, 64, 16)
        //     .lineStyle(2, 0x000000, 1)
        //     .strokeRoundedRect(-80, -32, 160, 64, 16);
        // const buttonNextText = this.add.text(0, -6, 'next', {
        //     fontFamily: 'alsContract',
        //     fontSize: '48px',
        //     color: '#222222',
        // }).setOrigin(0.5);

        let buttonCheckGame = this.add.image(this.scale.width / 2, 936, 'checkButton80')
            .setScale(1)
            .setInteractive()
            .setVisible(false)
            .on('pointerover', () => { buttonCheckGame.setScale(1) })
            .on('pointerout', () => { buttonCheckGame.setScale(1) })
            .on('pointerdown', () => { buttonCheckGame.setScale(.95) })
            .on('pointerup', () => {
                buttonCheckGame.setScale(1);

                // for (let j = 0; j < gameSetting.chipsValue.length; j++) {
                //     if (gameSetting.playerСredits >= gameSetting.chipsValue[j]) {
                //         this.children.getByName('chip_' + (j + 1)).setVisible(true);
                //     } else {
                //         this.children.getByName('chip_' + (j + 1)).setVisible(false);
                //     }
                // }
            });

        // const buttonNext = this.add.container((this.scale.width / 2), 936, [buttonNextGraphics, buttonNextText])
        //     .setScale(1)
        //     .setSize(180, 64)
        //     .setInteractive()
        //     .setVisible(false)
        //     .on('pointerover', () => { buttonNextGraphics.setScale(1), buttonNextText.setScale(1) })
        //     .on('pointerout', () => { buttonNextGraphics.setScale(1), buttonNextText.setScale(1) })
        //     .on('pointerdown', () => { buttonNextGraphics.setScale(.95), buttonNextText.setScale(.95) })
        //     .on('pointerup', () => {
        //         buttonNextGraphics.setScale(1);
        //         buttonNextText.setScale(1);
        //         buttonNext.setVisible(false);

        //         for (let j = 0; j < gameSetting.chipsValue.length; j++) {
        //             if (gameSetting.playerСredits >= gameSetting.chipsValue[j]) {
        //                 this.children.getByName('chip_' + (j + 1)).setVisible(true);
        //             } else {
        //                 this.children.getByName('chip_' + (j + 1)).setVisible(false);
        //             }
        //         }

        //     });

        // let frames = this.textures.get('cards').getFrameNames();
        // console.log('количество карт ' + frames.length)
        // console.log('количество карт дилера ' + gameSetting.numberCards)
    }
}

export class Menu extends Phaser.Scene {
    constructor() {
        super({
            key: 'Menu'
        });
    }

    create() {
        this.uiScene = this.scene.get('Play');

        this.add.image(this.scale.width / 2, this.scale.height / 2, 'background_menu');

        console.log(this.uiScene)

        // this.uiScene.print();

        // this.add.graphics()
        //     .fillStyle(0x171717, 1)
        //     .fillRect(0, 0, 810, 1080)

        const closeButton = this.add.image(64, 128, 'closeButton')
            .setScale(1)
            .setInteractive()
            .on('pointerover', () => { closeButton.setScale(1) })
            .on('pointerout', () => { closeButton.setScale(1) })
            .on('pointerdown', () => { closeButton.setScale(.95) })
            .on('pointerup', () => {
                closeButton.setScale(1);

                this.scene.resume('Play');
                this.scene.stop();

            });

        const soundOnOffButton = this.add.image(128, 128, 'musicOnOffIcon')
            // .setFrame(0)
            .setScale(1)
            .setInteractive()
            .on('pointerover', () => { soundOnOffButton.setScale(1) })
            .on('pointerout', () => { soundOnOffButton.setScale(1) })
            .on('pointerdown', () => { soundOnOffButton.setScale(.95) })
            .on('pointerup', () => {
                soundOnOffButton.setScale(1);

                //    this.uiScene.sound.sounds[0].setMute(true);
                // data.music.pause();

                if (gameSetting.sound == true) {
                    gameSetting.sound = false;
                    soundOnOffButton.setFrame(1);

                    gameSetting.soundVolume = 0;
                    gameSetting.musicVolume = 0;

                    // data.music.stop();

                    // this.uiScene.sound.sounds[11].pause();

                    // this.uiScene.sound.sounds('music', {volume: gameSetting.soundVolume});



                } else {
                    gameSetting.sound = true;
                    soundOnOffButton.setFrame(0);
                    console.log(gameSetting.sound);
                    gameSetting.soundVolume = 1;
                    // this.uiScene.sound.sounds[11].resume();
                }
            });

        console.log(gameSetting.currentLang)

        let langX = 280;

        for (let i = 0; i < gameSetting.languages.length; i++) {

            const langName = this.add.text(this.scale.width / 2, langX, gameSetting.languages[i], {
                fontFamily: 'alsContract', fontSize: 28, color: '#F5F5F5', align: 'center'
            })
                .setOrigin(0.5)
                .setName(gameSetting.languages[i])
                .setInteractive()
                .on('pointerover', () => { langName.setScale(1.2) })
                .on('pointerout', () => { langName.setScale(1) })
                .on('pointerdown', () => { langName.setScale(.9) })
                .on('pointerup', () => {
                    langName.setScale(1);

                    for (let i = 0; i < gameSetting.languages.length; i++) {
                        this.children.getByName(gameSetting.languages[i]).setFill('#F5F5F5')
                    }

                    this.children.getByName(gameSetting.languages[i]).setFill('#FCD34D');
                    gameSetting.currentLang = gameSetting.languagesCodes[i];

                    this.uiScene.children.getByName('betMessageText').text = langSetting.betMessageText[gameSetting.currentLang];
                    this.uiScene.children.getByName('dealerName').text = langSetting.dealerName[gameSetting.currentLang];
                    this.uiScene.children.getByName('playerName').text = langSetting.playerName[gameSetting.currentLang] + '  $' + gameSetting.playerСredits;
                });

            langX += 48;
        }

        switch (gameSetting.currentLang) {
            case 'en':
                this.children.getByName('English').setFill('#FCD34D');
                break;
            case 'ru':
                this.children.getByName('Русский').setFill('#FCD34D');
                break;
            case 'ar':
                this.children.getByName('اَلْعَرَبِيَّةُ').setFill('#FCD34D');
                break;
            case 'de':
                this.children.getByName('Deutsch').setFill('#FCD34D');
                break;
            case 'es':
                this.children.getByName('español').setFill('#FCD34D');
                break;
            case 'fr':
                this.children.getByName('français').setFill('#FCD34D');
                break;
            case 'hi':
                this.children.getByName('हिन्दी').setFill('#FCD34D');
                break;
            case 'it':
                this.children.getByName('italiano').setFill('#FCD34D');
                break;
            case 'ja':
                this.children.getByName('日本語').setFill('#FCD34D');
                break;
            case 'ko':
                this.children.getByName('한국어').setFill('#FCD34D');
                break;
            case 'pt':
                this.children.getByName('português').setFill('#FCD34D');
                break;
            case 'tr':
                this.children.getByName('türkçe').setFill('#FCD34D');
                break;
            case 'vi':
                this.children.getByName('Tiếng Việt').setFill('#FCD34D');
                break;
            case 'zh':
                this.children.getByName('中文').setFill('#FCD34D');
                break;
        }
    }
}
