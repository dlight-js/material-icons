import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MessageSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 2H2.01L2 22l4-4h16V2zm-4 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z\"/>")
      .name("MessageSharp")
  }
}

export default MessageSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
