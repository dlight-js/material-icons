import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NavigateNextSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z\"/>")
      .name("NavigateNextSharp")
  }
}

export default NavigateNextSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
