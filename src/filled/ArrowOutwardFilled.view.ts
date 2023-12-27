import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowOutwardFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z\"/>")
      .name("ArrowOutwardFilled")
  }
}

export default ArrowOutwardFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
