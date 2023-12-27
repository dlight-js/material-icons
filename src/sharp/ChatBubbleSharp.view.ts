import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ChatBubbleSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 2H2v20l4-4h16V2z\"/>")
      .name("ChatBubbleSharp")
  }
}

export default ChatBubbleSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
