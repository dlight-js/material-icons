import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PagesSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 3v8h5L7 7l4 1V3H3zm5 10H3v8h8v-5l-4 1 1-4zm9 4-4-1v5h8v-8h-5l1 4zm4-14h-8v5l4-1-1 4h5V3z\"/>")
      .name("PagesSharp")
  }
}

export default PagesSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
