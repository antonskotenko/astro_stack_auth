import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel";
import starlight from '@astrojs/starlight';
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'http://localhost:4321',
	// site: 'https://azart.live',
	integrations: [
		// sitemap({
		// 	i18n: {
		// 		defaultLocale: 'en',
		// 		locales: {
		// 			en: 'en',
		// 			ru: 'ru',
		// 			ar: 'ar',
		// 			de: 'de',
		// 			es: 'es',
		// 			fr: 'fr',
		// 			hi: 'hi',
		// 			it: 'it',
		// 			ja: 'ja',
		// 			ko: 'ko',
		// 			pt: 'pt',
		// 			tr: 'tr',
		// 			vi: 'vi',
		// 			zh: 'zh',
		// 		},
		// 	},
		// }),
		starlight({
			title: 'azart.live',
			logo: {
				src: './src/assets/azart.live_logo.svg',
				replacesTitle: true,
			},
			customCss: [
				'./src/fonts/font-face.css',
				'./src/styles/custom.css',
			],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				ru: {
					label: 'Русский',
					lang: 'ru',
				},
				ar: {
					label: 'اَلْعَرَبِيَّةُ',
					lang: 'ar',
					dir: 'rtl',
				},
				de: {
					label: 'Deutsch',
					lang: 'de',
				},
				es: {
					label: 'español',
					lang: 'es',
				},
				fr: {
					label: 'français',
					lang: 'fr',
				},
				hi: {
					label: 'हिन्दी',
					lang: 'hi',
				},
				it: {
					label: 'italiano',
					lang: 'it',
				},
				ja: {
					label: '日本語',
					lang: 'ja',
				},
				ko: {
					label: '한국어',
					lang: 'ko',
				},
				pt: {
					label: 'português',
					lang: 'pt',
				},
				tr: {
					label: 'türkçe',
					lang: 'tr',
				},
				vi: {
					label: 'Tiếng Việt',
					lang: 'vi',
				},
				zh: {
					label: '中文',
					lang: 'zh',
				},
			},
			sidebar: [
				{
					label: 'Games',
					translations: {
						'ru': 'Игры',
						'ar': 'الألعاب',
						'de': 'Spiele',
						'es': 'Juegos',
						'fr': 'Jeux',
						'hi': 'खेलों',
						'it': 'Giochi',
						'ja': 'ゲーム',
						'ko': '게임',
						'pt': 'Jogos',
						'tr': 'Oyunlar',
						'vi': 'Trò chơi',
						'zh': '游戏',
					},
					items: [
						{
							slug: 'games/blackjack',
						},
						{
							slug: 'games/21',
							badge: {
								text: {
									ru: 'Скоро',
									en: 'Soon',
									ar: 'قريباً',
									de: 'Bald',
									es: 'Pronto',
									fr: 'Bientôt',
									hi: 'जल्द ही',
									it: 'Presto',
									ja: 'まもなく',
									ko: '곧',
									pt: 'Em breve',
									tr: 'Yakında',
									vi: 'Sớm',
									zh: '很快',
								},
							},
						},
						{
							slug: 'games/spider',
							badge: {
								text: {
									ru: 'Скоро',
									en: 'Soon',
									ar: 'قريباً',
									de: 'Bald',
									es: 'Pronto',
									fr: 'Bientôt',
									hi: 'जल्द ही',
									it: 'Presto',
									ja: 'まもなく',
									ko: '곧',
									pt: 'Em breve',
									tr: 'Yakında',
									vi: 'Sớm',
									zh: '很快',
								},
							},
						},
					],
				},
				{
					label: 'Rules of the games',
					translations: {
						'ru': 'Правила игр',
						'ar': 'قواعد الألعاب',
						'de': 'Regeln der Spiele',
						'es': 'Reglas de juego',
						'fr': 'Règles des jeux',
						'hi': 'खेलों के नियम',
						'it': 'Regole dei giochi',
						'ja': '競技規則',
						'ko': '게임 규칙',
						'pt': 'Regras dos jogos',
						'tr': 'Oyun Kuralları',
						'vi': 'Quy tắc của trò chơi',
						'zh': '游戏规则',
					},
					items: [
						{
							slug: 'games/blackjack',
							badge: {
								text: {
									ru: 'Играть',
									en: 'Play',
									ar: 'اللعب',
									de: 'Spielen',
									es: 'Jugar',
									fr: 'Jouer',
									hi: 'प्ले',
									it: 'Gioco',
									ja: 'プレー',
									ko: '플레이',
									pt: 'Jogar',
									tr: 'Oyun',
									vi: 'Chơi',
									zh: '游戏',
								},
							},
						},
						{
							slug: 'rules/cheat-your-naighbour',
						},
						{
							slug: 'rules/drunkard',
						},
						{
							slug: 'rules/hearts',
						},
						{
							slug: 'rules/klondike',
						},
						{
							slug: 'rules/my-trumps',
						},
						{
							slug: 'rules/spider',
						},
						{
							slug: 'rules/the-fool',
						},
					],
				},
				{
					label: 'About',
					translations: {
						'ru': 'О сайте',
						// 'ar': '',
						// 'de': '',
						// 'es': '',
						// 'fr': '',
						// 'hi': '',
						// 'it': '',
						// 'ja': '',
						// 'ko': '',
						// 'pt': '',
						// 'tr': '',
						// 'vi': '',
						// 'zh': '',
					},
					items: [
						{
							slug: 'about/privacy-policy',
						},
						{
							slug: 'about/user-agreement',
						},
						{
							slug: 'about/contacts',
						},
					],
				},
			],
		}),
	],
	devToolbar: {
		enabled: false
	},
	output: "server",
	adapter: vercel(),
});
