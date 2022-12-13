    export interface ListData {
        id: number;
        imge: string;
        icon: string;
        logo: string;
        title: string;
        description: string;
        button: string;
        gif: string;
        trailer: string;
    }

        export const LIST_DATA: ListData[] = [
            {
                id: 0,
                imge: "https://media.discordapp.net/attachments/905837522813337613/1046062417672667156/Banner.png?width=1440&height=552",
                icon: "https://media.discordapp.net/attachments/905837522813337613/1046054353246629908/Game1.png",
                logo: 'https://media.discordapp.net/attachments/905837522813337613/1046069123613986868/image_51.png',
                title: "Retorna à escuridão com o game Diablo IV",
                description: "O retorno de Lilith traz uma era de escuridão e sofrimento",
                button: "Jogue agora",
                gif: "https://media.tenor.com/ggURQFKLbvEAAAAC/diablo-immortal.gif",
                trailer: "https://www.youtube.com/watch?v=Ro26B394ZBM&ab_channel=GameSpot"
            },
            {
                id: 1,
                imge: "https://media.discordapp.net/attachments/905837522813337613/1046062386181849188/image_81.png?width=1233&height=630",
                icon: "https://media.discordapp.net/attachments/905837522813337613/1046054353661857814/Game2.png",
                logo: 'https://media.discordapp.net/attachments/905837522813337613/1046069124461236294/image_3.png',
                title: "Novo pacote de expansão de Hearthstone",
                description: "A Horda e a Aliança se encontraram no Vale Alterac para lutar",
                button: "Reserve agora na pré-venda",
                gif: "https://cdn.hearthstonetopdecks.com/wp-content/uploads/2017/08/Hearth_and_Home_2.gif",
                trailer: "https://www.youtube.com/watch?v=o84Y_cSjVyE&ab_channel=Hearthstone"
            },
            {
                id: 2,
                imge: "https://media.discordapp.net/attachments/905837522813337613/1046062386521591968/wp7053659-world-of-warcraft-shadowlands-2020-wallpapers_2.png?width=1233&height=630",
                icon: "https://media.discordapp.net/attachments/905837522813337613/1046054354152599583/Game3.png",
                logo: 'https://media.discordapp.net/attachments/905837522813337613/1046069124066975826/6.png',
                title: "Desbrave as Terras Sombrias em Shadowlands! ",
                description: "O que jaz além do mundo que você conhece?",
                button: "Reserve agora na pré-venda",
                gif: "https://thumbs.gfycat.com/AlienatedGlamorousIrukandjijellyfish-size_restricted.gif",
                trailer: "https://www.youtube.com/watch?v=vlVSJ0AvZe0&ab_channel=WorldofWarcraft"
            },
            {
                id: 3,
                imge: "https://media.discordapp.net/attachments/905837522813337613/1046062417672667156/Banner.png?width=1440&height=552",
                icon: "https://media.discordapp.net/attachments/905837522813337613/1046054354525896724/Game4.png",
                logo: 'https://media.discordapp.net/attachments/905837522813337613/1046069123613986868/image_51.png',
                title: "Desbrave as Terras Sombrias em Shadowlands! ",
                description: "O que jaz além do mundo que você conhece?",
                button: "Reserve agora na pré-venda",
                gif: "https://media.tenor.com/ggURQFKLbvEAAAAC/diablo-immortal.gif",
                trailer: "https://www.youtube.com/watch?v=Ro26B394ZBM&ab_channel=GameSpot"
            },
            {
                id: 4,
                imge: "https://media.discordapp.net/attachments/905837522813337613/1046062417672667156/Banner.png?width=1440&height=552",
                logo: 'https://media.discordapp.net/attachments/905837522813337613/1046069123613986868/image_51.png',
                icon: "https://media.discordapp.net/attachments/905837522813337613/1046054352390983690/Game5.png",
                title: "Desbrave as Terras Sombrias em Shadowlands! ",
                description: "O que jaz além do mundo que você conhece?",
                button: "Reserve agora na pré-venda",
                gif: "https://media.tenor.com/ggURQFKLbvEAAAAC/diablo-immortal.gif",
                trailer: "https://www.youtube.com/watch?v=Ro26B394ZBM&ab_channel=GameSpot"
            },
        ];

    // ---------------------------- //

    export interface GamesDropdown {
        id: number;
        image: string;
        name: string;
      }

        export const GAMES_DROPDOWN: GamesDropdown[] = [
            {
                id: 0,
                image: "https://media.discordapp.net/attachments/905837522813337613/1049849089430409327/1.png",
                name: "Diablo® II ressurected"
            },
            {
                id: 1,
                image: "https://media.discordapp.net/attachments/905837522813337613/1049849180509712466/2.png",
                name: "Overwatch® 2"
            },
            {
                id: 2,
                image: "https://media.discordapp.net/attachments/905837522813337613/1049849180903981137/3.png",
                name: "World of Warcraft®"
            },
            {
                id: 3,
                image: "https://media.discordapp.net/attachments/905837522813337613/1049849181633789952/4.png",
                name: "Hearthstone®"
            },
            {
                id: 4,
                image: "https://media.discordapp.net/attachments/905837522813337613/1049849181273083924/5.png",
                name: "Heroes of the storm®"
            },
            {
                id: 5,
                image: "https://media.discordapp.net/attachments/905837522813337613/1049849182070001754/6.png",
                name: "Warcraft® III Reforged"
            },
            {
                id: 6,
                image: "https://media.discordapp.net/attachments/905837522813337613/1049849182409732136/7.png",
                name: "Diablo® IV"
            },
            {
                id: 7,
                image: "https://media.discordapp.net/attachments/905837522813337613/1049849182745280582/8.png",
                name: "Diablo® Immortal"
            },
            {
                id: 8,
                image: "https://media.discordapp.net/attachments/905837522813337613/1049849183059857458/9.png",
                name: "Diablo® III"
            },
            {
                id: 9,
                image: "https://media.discordapp.net/attachments/905837522813337613/1049849180190953503/10.png",
                name: "StarCraft® II"
            },
            {
                id: 10,
                image: "https://media.discordapp.net/attachments/905837522813337613/1049849275368095844/11.png",
                name: "StarCraft® Remastered"
            },
            {
                id: 11,
                image: "https://media.discordapp.net/attachments/905837522813337613/1049849275653292112/12.png",
                name: "Arcade da Blizzard®"
            },  
        ];

    // ---------------------------- //

    export interface EsportsDropdown {
        id: number;
        image: string;
        name: string;
      }
    
        export const ESPORTS_DROPDOWN: EsportsDropdown[] = [
            {
                id: 0,
                image: "https://media.discordapp.net/attachments/905837522813337613/1050168043625529464/image_17.png",
                name: "Hearthstone® masters"
            },
            {
                id: 1,
                image: "https://media.discordapp.net/attachments/905837522813337613/1050168034863616091/image_17-1.png",
                name: "Campeonato de Arena WoW®"
            },
            {
                id: 2,
                image: "https://media.discordapp.net/attachments/905837522813337613/1050168035249487872/image_17-2.png",
                name: "StarCraft® II WCS"
            },
            {
                id: 3,
                image: "https://media.discordapp.net/attachments/905837522813337613/1050168018774265926/image_17-3.png",
                name: "Copa Mundial de Overwatch®"
            },
            {
                id: 4,
                image: "https://media.discordapp.net/attachments/905837522813337613/1050168019218878474/image_17-4.png",
                name: "Liga de Overwatch®"
            },
        ];