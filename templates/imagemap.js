export default () => {
  return {
    type: "imagemap",
    baseUrl: "https://i.imgur.com/T8QnNrg.png",
    altText: "Imagemap",
    baseSize: {
      width: 1040,
      height: 1200
    },
    actions: [
      {
        type: "message",
        text: "展覽",
        area: { x: 0, y: 0, width: 520, height: 400 }
      },
      {
        type: "message",
        text: "講座",
        area: { x: 520, y: 0, width: 520, height: 400 }
      },
      {
        type: "message",
        text: "表演藝術",
        area: { x: 0, y: 400, width: 520, height: 400 }
      },
      {
        type: "message",
        text: "城市生活圈",
        area: { x: 520, y: 400, width: 520, height: 400 }
      },
      {
        type: "message",
        text: "親子活動",
        area: { x: 0, y: 800, width: 520, height: 400 }
      },
      {
        type: "message",
        text: "音樂現場",
        area: { x: 520, y: 800, width: 520, height: 400 }
      }
    ]
  }
}