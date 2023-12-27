import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MinimizeFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 19h12v2H6z\"/>")
      .name("MinimizeFilled")
  }
}

export default MinimizeFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
