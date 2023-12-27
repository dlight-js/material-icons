import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowRightSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m10 17 5-5-5-5v10z\"/>")
      .name("ArrowRightSharp")
  }
}

export default ArrowRightSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
