import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VerticalShadesSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 19V3H4v16H2v2h20v-2h-2zm-10 0V5h4v14h-4z\"/>")
      .name("VerticalShadesSharp")
  }
}

export default VerticalShadesSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
