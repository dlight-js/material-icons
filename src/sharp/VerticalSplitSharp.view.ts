import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VerticalSplitSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 15h8v-2H3v2zm0 4h8v-2H3v2zm0-8h8V9H3v2zm0-6v2h8V5H3zm10 0h8v14h-8V5z\"/>")
      .name("VerticalSplitSharp")
  }
}

export default VerticalSplitSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
