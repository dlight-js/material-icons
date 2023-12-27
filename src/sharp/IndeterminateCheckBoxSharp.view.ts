import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class IndeterminateCheckBoxSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3H3v18h18V3zm-4 10H7v-2h10v2z\"/>")
      .name("IndeterminateCheckBoxSharp")
  }
}

export default IndeterminateCheckBoxSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
