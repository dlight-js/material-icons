import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EmojiEmotionsOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<circle cx=\"15.5\" cy=\"9.5\" r=\"1.5\"/><circle cx=\"8.5\" cy=\"9.5\" r=\"1.5\"/><path d=\"M12 18c2.28 0 4.22-1.66 5-4H7c.78 2.34 2.72 4 5 4z\"/><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/>")
      .name("EmojiEmotionsOutlined")
  }
}

export default EmojiEmotionsOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
