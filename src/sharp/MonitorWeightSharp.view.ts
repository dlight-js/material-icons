import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MonitorWeightSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3H3v18h18V3zm-6.8 8.2c-3.23 2.43-6.84-1.18-4.4-4.41 3.23-2.42 6.83 1.19 4.4 4.41z\"/><path d=\"M10 8.5h1v1h-1zm1.5 0h1v1h-1zm1.5 0h1v1h-1z\"/>")
      .name("MonitorWeightSharp")
  }
}

export default MonitorWeightSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
