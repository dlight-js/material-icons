import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowLeftSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m14 7-5 5 5 5V7z\"/>")
      .name("ArrowLeftSharp")
  }
}

export default ArrowLeftSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
