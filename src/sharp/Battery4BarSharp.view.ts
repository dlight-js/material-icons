import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Battery4BarSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 4v18H7V4h3V2h4v2h3zm-2 2H9v6h6V6z\"/>")
      .name("Battery4BarSharp")
  }
}

export default Battery4BarSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
