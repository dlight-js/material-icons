import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ChatSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 2H2.01L2 22l4-4h16V2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z\"/>")
      .name("ChatSharp")
  }
}

export default ChatSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
