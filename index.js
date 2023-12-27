// 套件匯入
import 'dotenv/config'
import linebot from 'linebot'
import { scheduleJob } from 'node-schedule'

// 檔案、指令匯入
import magazine from './commands/magazine.js'
import quick_reply_C from './commands/quick_reply_C.js'
import current from './commands/current.js'
import moreInfo from './commands/moreInfo.js'
import quick_reply_F from './commands/quick_reply_F.js'
import future from './commands/future.js'
import location from './commands/location.js'
import culture_json from './commands/culture_json.js'

// 每個月定時更新一次 JSON
scheduleJob('0 0 1 * *', () => {
  culture_json()
})

// 從.env 引入 line developer 帳密
// 建立機器人
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (event.message.type === 'text') {
    console.log("Message text:", event.message.text)

    const userInput = event.message.text

    if (userInput === "當期月刊") {
      magazine(event)
    }
    else if (userInput.includes("當期活動")) {
      quick_reply_C(event)
    }
    else if (userInput.includes("活動預告")) {
      quick_reply_F(event)
    }
    else if (userInput.includes("當期展覽")) {
      current(event, "展覽")
    }
    else if (userInput.includes("當期講座")) {
      current(event, "講座")
    }
    else if (userInput.includes("展覽預告") || userInput.includes("講座預告") || userInput.includes("表演藝術預告")) {
      console.log('預告收到')
      future(event, null, userInput)
    }
    else if (userInput.includes("表演藝術") || userInput.includes("城市生活圈") || userInput.includes("親子活動") || userInput.includes("音樂現場")) {
      console.log('當期收到')
      current(event, userInput)
    }
  } else if (event.message.type === 'location') {
    location(event)
  }
})

bot.on('postback', event => {
  console.log("bot.on(postback)啟動")
  if (!isNaN(event.postback.data)) {
    let index = event.postback.data
    moreInfo(event, index)
  } else if (event.postback.data === "時間") {
    let select_day = event.postback.params
    console.log(select_day)
    future(event, select_day, "呱呱")
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})