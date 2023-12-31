import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LocalHotelFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z\"/>")
      .name("LocalHotelFilled")
  }
}

export default LocalHotelFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
