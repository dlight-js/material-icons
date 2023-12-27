import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MaximizeFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 3h18v2H3z\"/>")
      .name("MaximizeFilled")
  }
}

export default MaximizeFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
