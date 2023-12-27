import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class InsertChartOutlinedSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm2-16H3v18h18V3z\"/>")
      .name("InsertChartOutlinedSharp")
  }
}

export default InsertChartOutlinedSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
