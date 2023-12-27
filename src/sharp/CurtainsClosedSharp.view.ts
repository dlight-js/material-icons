import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CurtainsClosedSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 19V3H4v16H2v2h20v-2h-2zM11 5h2v14h-2V5z\"/>")
      .name("CurtainsClosedSharp")
  }
}

export default CurtainsClosedSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
