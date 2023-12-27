import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MaximizeSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 3h18v2H3V3z\"/>")
      .name("MaximizeSharp")
  }
}

export default MaximizeSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
