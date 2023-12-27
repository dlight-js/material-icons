import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowBackSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/>")
      .name("ArrowBackSharp")
  }
}

export default ArrowBackSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
