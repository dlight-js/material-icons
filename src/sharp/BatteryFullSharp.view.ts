import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BatteryFullSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 4h-3V2h-4v2H7v18h10V4z\"/>")
      .name("BatteryFullSharp")
  }
}

export default BatteryFullSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
