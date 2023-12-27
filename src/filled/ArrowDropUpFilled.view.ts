import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowDropUpFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m7 14 5-5 5 5z\"/>")
      .name("ArrowDropUpFilled")
  }
}

export default ArrowDropUpFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
