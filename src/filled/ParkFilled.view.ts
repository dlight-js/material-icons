import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ParkFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.96v-4H21z\"/>")
      .name("ParkFilled")
  }
}

export default ParkFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
