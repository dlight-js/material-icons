import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ChatBubbleOutlineRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 4v12H5.17L4 17.17V4h16m0-2H4c-1.1 0-2 .9-2 2v15.59c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z\"/>")
      .name("ChatBubbleOutlineRound")
  }
}

export default ChatBubbleOutlineRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
