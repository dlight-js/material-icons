import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SimCardAlertSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 2H10L4 8v14h16V2zm-7 15h-2v-2h2v2zm0-4h-2V8h2v5z\"/>")
      .name("SimCardAlertSharp")
  }
}

export default SimCardAlertSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
