import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class InsertChartOutlinedTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"/>")
      .name("InsertChartOutlinedTwoTone")
  }
}

export default InsertChartOutlinedTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
