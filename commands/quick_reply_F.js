export default async (event) => {
  try {
    // 抓時間
    const now = new Date()
    const year = now.getFullYear()
    const month = (now.getMonth() + 1).toString().padStart(2, "0")
    const date = now.getDate().toString().padStart(2, "0")
    console.log('quick reply 收到')

    await event.reply({
      type: "text",
      text: "從下方選擇未來想要的時間或活動類別",
      quickReply: {
        items: [
          {
            type: "action",
            imageUrl: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/calendar-icon.png",
            action: {
              type: "datetimepicker",
              label: "選日期",
              data: "時間",
              mode: "date",
              initial: `${year}-${month}-${date}`
            }
          },
          {
            type: "action",
            action: {
              type: "message",
              label: "展覽預告",
              text: "展覽預告"
            }
          },
          {
            type: "action",
            action: {
              type: "message",
              label: "講座預告",
              text: "講座預告"
            }
          },
          {
            type: "action",
            action: {
              type: "message",
              label: "表演藝術預告",
              text: "表演藝術預告"
            }
          }
        ]
      }
    })

  } catch (error) {
    console.log(error)
  }
}