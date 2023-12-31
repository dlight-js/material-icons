import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WaterfallChartFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 4h3v16h-3zM3 13h3v7H3zm11-9h3v3h-3zm-4 1h3v4h-3zm-3 5h3v4H7z\"/>")
      .name("WaterfallChartFilled")
  }
}

export default WaterfallChartFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
