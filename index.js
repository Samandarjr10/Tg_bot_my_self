const tgBot = require("node-telegram-bot-api")
const TOKEN = "5288845393:AAHtIH3Axi3wHP4w3xBAr9vWHZ4G6ugd964"

const bot = new tgBot(TOKEN, {
    polling: true
})

bot.onText(/\/start/, msg => {
    const chatId = msg.chat.id
    bot.sendMessage(chatId, `Salom ${msg.from.first_name}, hush keldingiz !!`, {
        reply_markup: JSON.stringify({
            keyboard: [
                [
                    {
                        text: "Man haqimda"
                    },
                    {
                        text: "Mening partfolium"
                    }
                ],
                [
                    {
                        text: "Mening resumium"
                    }
                ]
            ],
            resize_keyboard: true
        })
    })
})

bot.on("message", msg => {
    const chatId = msg.chat.id
    if (msg.text == "Man haqimda") {
        bot.sendPhoto(chatId, "https://avatars.githubusercontent.com/u/93244072?s=400&u=8e5140615ffbad55cdd845223807fc8bb6717ed8&v=4", {
            caption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        }
        )
    }
})

bot.on("message", msg => {
    const chatId = msg.chat.id
    if (msg.text == "Mening partfolium") {
        bot.sendPhoto(chatId, "https://img.redbull.com/images/c_fill,w_1200,h_630,g_auto,f_auto,q_auto/redbullcom/2016/09/20/1331818966444_2/pok%C3%A9mon-super-mystery-dungeon", {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Info",
                            callback_data: "Partfolium_info",
                            url: "https://cocky-wing-a17b4b-112244.netlify.app"
                        }
                    ]
                ]
            }
        }
        )
    }
})

bot.on("message", msg => {
    const chatId = msg.chat.id
    if (msg.text == "Mening resumium") {
        bot.sendMessage(chatId, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate!")
    }
})