import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BarChartSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z\"/>")
      .name("BarChartSharp")
  }
}

export default BarChartSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
