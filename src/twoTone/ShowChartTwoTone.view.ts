import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ShowChartTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m13.5 13.48-4-4L2 16.99l1.5 1.5 6-6.01 4 4L22 6.92l-1.41-1.41z\"/>")
      .name("ShowChartTwoTone")
  }
}

export default ShowChartTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
