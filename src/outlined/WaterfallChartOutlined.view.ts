import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WaterfallChartOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 4h3v16h-3V4zM3 13h3v7H3v-7zm11-9h3v3h-3V4zm-4 1h3v4h-3V5zm-3 5h3v4H7v-4z\"/>")
      .name("WaterfallChartOutlined")
  }
}

export default WaterfallChartOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
