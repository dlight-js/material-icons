import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LanFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 22h8v-7h-3v-4h-5V9h3V2H8v7h3v2H6v4H3v7h8v-7H8v-2h8v2h-3z\"/>")
      .name("LanFilled")
  }
}

export default LanFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
