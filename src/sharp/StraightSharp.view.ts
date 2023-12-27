import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class StraightSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11 6.83 9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V21h-2z\"/>")
      .name("StraightSharp")
  }
}

export default StraightSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
