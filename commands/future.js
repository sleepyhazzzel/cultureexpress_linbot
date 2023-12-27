import culture_express_json from "../data/culture_express.json" assert { type: 'json' }
import template from '../templates/multi_cards.js'

export default async (event, select_day, userInput) => {
  try {
    // 抓現在日期
    const now = new Date()
    const year = now.getFullYear()
    const month = (now.getMonth() + 1).toString().padStart(2, "0")
    const date = now.getDate().toString().padStart(2, "0")

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
        let start = item.StartDate.split(" ")[0].split("-")
        let end = item.EndDate.split(" ")[0].split("-")
        let input = userInput.slice(0, -2)
        if (select_day !== null) {
          // { date: '2024-01-01' }
          let select_year = select_day.date.split("-")[0]
          let select_month = select_day.date.split("-")[1]
          let select_date = select_day.date.split("-")[2]
          if (select_year <= end[0] && select_month <= end[1] && select_date <= end[2] && select_year >= start[0] && select_month >= start[1] && select_date >= start[2]) {
            push_arr(item, index)
          }
        } else if (item.Category.includes(input)) {
          if (year <= start[0] && month <= start[1] && date < start[2]) {
            console.log(start)
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