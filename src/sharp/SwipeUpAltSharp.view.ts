import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SwipeUpAltSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m13 5.83 1.59 1.59L16 6l-4-4-4 4 1.41 1.41L11 5.83v4.27a5 5 0 1 0 2 0V5.83z\"/>")
      .name("SwipeUpAltSharp")
  }
}

export default SwipeUpAltSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
