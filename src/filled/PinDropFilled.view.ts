import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PinDropFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2a2 2 0 1 1-4 0zM5 20v2h14v-2H5z\"/>")
      .name("PinDropFilled")
  }
}

export default PinDropFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
