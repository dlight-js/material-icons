import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowUpwardSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z\"/>")
      .name("ArrowUpwardSharp")
  }
}

export default ArrowUpwardSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
