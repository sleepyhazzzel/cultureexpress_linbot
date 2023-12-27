export default () => {
  return {
    type: "bubble",
    size: "deca",
    hero: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
          size: "full",
          aspectMode: "cover",
          aspectRatio: "20:13"
        },
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "展覽",
              size: "xs",
              color: "#ffffff"
            }
          ],
          position: "absolute",
          width: "53px",
          height: "25px",
          backgroundColor: "#000000",
          justifyContent: "center",
          alignItems: "center",
          cornerRadius: "20px",
          offsetTop: "10px",
          offsetStart: "10px"
        }
      ]
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "開幕特展",
          weight: "bold",
          size: "md",
          wrap: true
        },
        {
          type: "text",
          text: "胡克敏紀念館",
          color: "#aaaaaa",
          size: "xs",
          offsetBottom: "sm"
        }
      ],
      spacing: "sm"
    },
    footer: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "button",
          action: {
            type: "postback",
            label: "詳細資訊",
            data: "29"
          },
          height: "sm",
          style: "secondary"
        }
      ],
      offsetBottom: "3px"
    }
  }
}