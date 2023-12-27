import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WineBarSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 3v6c0 2.97 2.16 5.43 5 5.91V19H8v2h8v-2h-3v-4.09c2.84-.48 5-2.94 5-5.91V3H6zm10 5H8V5h8v3z\"/>")
      .name("WineBarSharp")
  }
}

export default WineBarSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
