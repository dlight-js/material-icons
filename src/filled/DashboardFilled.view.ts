import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DashboardFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z\"/>")
      .name("DashboardFilled")
  }
}

export default DashboardFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
