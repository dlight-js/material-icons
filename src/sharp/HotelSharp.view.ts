import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HotelSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm16-6H11v7H3V5H1v15h2v-3h18v3h2V7z\"/>")
      .name("HotelSharp")
  }
}

export default HotelSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
