import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowDownwardSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z\"/>")
      .name("ArrowDownwardSharp")
  }
}

export default ArrowDownwardSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
