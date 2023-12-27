import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MonitorSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 3H2v15h5l-1 1v2h12v-2l-1-1h5V3zm-2 13H4V5h16v11z\"/>")
      .name("MonitorSharp")
  }
}

export default MonitorSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
