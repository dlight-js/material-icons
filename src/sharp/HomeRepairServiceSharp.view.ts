import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HomeRepairServiceSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 16h-2v-1H8v1H6v-1H2v5h20v-5h-4zm-1-8V4H7v4H2v6h4v-2h2v2h8v-2h2v2h4V8h-5zM9 6h6v2H9V6z\"/>")
      .name("HomeRepairServiceSharp")
  }
}

export default HomeRepairServiceSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
