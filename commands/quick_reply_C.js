export default (event) => {
  try {
    event.reply({
      type: "text",
      text: "從下方選擇想要的活動類別",
      quickReply: {
        items: [
          {
            type: "action",
            imageUrl: "https://pngimg.com/uploads/google_maps_pin/google_maps_pin_PNG7.png",
            action: {
              type: "location",
              label: "選地點"
            }
          },
          {
            type: "action",
            action: {
              type: "message",
              label: "當期展覽",
              text: "當期展覽"
            }
          },
          {
            type: "action",
            action: {
              type: "message",
              label: "當期講座",
              text: "當期講座"
            }
          },
          {
            type: "action",
            action: {
              type: "message",
              label: "表演藝術",
              text: "表演藝術"
            }
          },
          {
            type: "action",
            action: {
              type: "message",
              label: "城市生活圈",
              text: "城市生活圈"
            }
          },
          {
            type: "action",
            action: {
              type: "message",
              label: "親子活動",
              text: "親子活動"
            }
          },
          {
            type: "action",
            action: {
              type: "message",
              label: "音樂現場",
              text: "音樂現場"
            }
          }
        ]
      }
    })
  } catch (error) {
    console.log(error)
  }
}