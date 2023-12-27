import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TodaySharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3h-3V1h-2v2H8V1H6v2H3v18h18V3zm-2 16H5V8h14v11zM7 10h5v5H7v-5z\"/>")
      .name("TodaySharp")
  }
}

export default TodaySharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
