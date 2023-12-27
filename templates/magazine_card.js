export default () => {
  return {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip1.jpg",
          size: "full",
          aspectMode: "cover",
          aspectRatio: "2:3",
          gravity: "top"
        },
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  text: "Brown's T-shirts",
                  size: "lg",
                  color: "#ffffff",
                  weight: "bold"
                }
              ]
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "filler"
                },
                {
                  type: "box",
                  layout: "baseline",
                  contents: [
                    {
                      type: "filler"
                    },
                    // {
                    //   type: "icon",
                    //   url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip14.png"
                    // },
                    {
                      type: "text",
                      text: "閱讀電子書",
                      color: "#ffffff",
                      flex: 0,
                      offsetTop: "-2px"
                    },
                    {
                      type: "filler"
                    }
                  ],
                  spacing: "sm"
                },
                {
                  type: "filler"
                }
              ],
              borderWidth: "1px",
              cornerRadius: "4px",
              spacing: "sm",
              borderColor: "#ffffff",
              margin: "xxl",
              height: "40px",
              action: {
                type: "uri",
                label: "action",
                uri: "http://linecorp.com/"
              }
            }
          ],
          position: "absolute",
          offsetBottom: "0px",
          offsetStart: "0px",
          offsetEnd: "0px",
          backgroundColor: "#000000B3",
          paddingAll: "20px",
          paddingTop: "18px"
        }
      ],
      paddingAll: "0px"
    },
    size: "hecto"
  }
}