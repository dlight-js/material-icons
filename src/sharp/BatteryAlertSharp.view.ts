import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BatteryAlertSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 4h-3V2h-4v2H7v18h10V4zm-4 14h-2v-2h2v2zm0-4h-2V9h2v5z\"/>")
      .name("BatteryAlertSharp")
  }
}

export default BatteryAlertSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
