import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SpaceDashboardSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11 21H3V3h8v18zm2 0h8v-9h-8v9zm8-11V3h-8v7h8z\"/>")
      .name("SpaceDashboardSharp")
  }
}

export default SpaceDashboardSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
