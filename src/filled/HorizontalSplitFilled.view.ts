import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HorizontalSplitFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 19h18v-6H3v6zm0-8h18V9H3v2zm0-6v2h18V5H3z\"/>")
      .name("HorizontalSplitFilled")
  }
}

export default HorizontalSplitFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
