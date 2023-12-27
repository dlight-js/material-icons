import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SquareSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 3h18v18H3z\"/>")
      .name("SquareSharp")
  }
}

export default SquareSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
