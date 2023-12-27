import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SortSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z\"/>")
      .name("SortSharp")
  }
}

export default SortSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
