import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AirlineSeatIndividualSuiteFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3zm12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4z\"/>")
      .name("AirlineSeatIndividualSuiteFilled")
  }
}

export default AirlineSeatIndividualSuiteFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
