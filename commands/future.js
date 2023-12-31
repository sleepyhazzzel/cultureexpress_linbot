import culture_express_json from "../data/culture_express.json" assert { type: 'json' }
import template from '../templates/multi_cards.js'

export default async (event, select_date, userInput) => {
  try {
    // 抓現在日期
    const now = new Date()
    const year = now.getFullYear()
    const month = (now.getMonth() + 1).toString().padStart(2, "0")
    const day = now.getDate().toString().padStart(2, "0")
    const date = new Date(`${year}-${month}-${day}`)

    const data = culture_express_json
    const img_url = []
    const title = []
    const place = []
    const type = []
    const width = []
    const currentIndex = []

    function push_arr(item, index) {
      img_url.push(item.ImageFile)
      title.push(item.Caption)
      place.push(item.Venue)
      type.push(item.Category)
      currentIndex.push(index)
      let wordsTotal = item.Category.length
      if (wordsTotal === 2) {
        width.push("50px")
      } else if (wordsTotal === 4) {
        width.push("70px")
      } else if (wordsTotal === 5) {
        width.push("90px")
      }
    }

    data.forEach((item, index) => {
      if (item.ImageFile !== null) {
        let start = new Date(item.StartDate.split(" ")[0])
        let end = new Date(item.EndDate.split(" ")[0])
        let input = userInput.slice(0, -2)
        if (select_date !== null) {
          // select_date = { date: '2024-01-01' }
          let select_day = new Date(select_date.date)

          if (select_day < end && select_day > start) {
            push_arr(item, index)
          }
        } else if (item.Category.includes(input)) {
          if (date < end && date > start) {
            push_arr(item, index)
          }
        }
      }
    })
    let total = currentIndex.length
    let numbers = new Set()
    let num_arr = []
    if (total >= 6) {
      // 隨機找五個數字當作 index，提取陣列中的資料
      while (numbers.size < 6) {
        let number = Math.floor(Math.random() * total)
        numbers.add(number)
      }
      num_arr = Array.from(numbers)
    }
    else if (total > 0 && total < 6) {
      // 如果小於五個直接轉換成相應長度的陣列
      num_arr = Array.from({ length: total }, (_, index) => index)
    }
    else {
      await event.reply('查無資料')
    }

    const cards = []
    num_arr.forEach((item) => {
      const card = template()
      // 大圖
      card.hero.contents[0].url = img_url[item]
      // 類型
      card.hero.contents[1].contents[0].text = type[item]
      // 長度
      card.hero.contents[1].width = width[item]
      // 名稱
      card.body.contents[0].text = title[item]
      // 地點
      card.body.contents[1].text = place[item]

      // JSON index      
      card.footer.contents[0].action.data = `${currentIndex[item]}`

      cards.push(card)
    })

    await event.reply({
      type: 'flex',
      altText: '活動預告',
      contents: {
        type: 'carousel',
        contents: cards
      }
    })

  } catch (error) {
    console.log(error)
  }
}