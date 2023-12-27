import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowCircleRightFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-10 1H8v-2h4V8l4 4-4 4v-3z\"/>")
      .name("ArrowCircleRightFilled")
  }
}

export default ArrowCircleRightFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
