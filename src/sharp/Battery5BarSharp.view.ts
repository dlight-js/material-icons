import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Battery5BarSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 4v18H7V4h3V2h4v2h3zm-2 2H9v4h6V6z\"/>")
      .name("Battery5BarSharp")
  }
}

export default Battery5BarSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
