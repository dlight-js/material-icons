import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ReplayCircleFilledFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path fill-rule=\"evenodd\" d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6 10c0 3.31-2.69 6-6 6s-6-2.69-6-6h2c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4v3L8 7l4-4v3c3.31 0 6 2.69 6 6z\"/>")
      .name("ReplayCircleFilledFilled")
  }
}

export default ReplayCircleFilledFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
