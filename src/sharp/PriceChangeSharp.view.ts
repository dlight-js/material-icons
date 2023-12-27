import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PriceChangeSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 4v16h20V4H2zm10 6H8v1h4v5h-2v1H8v-1H6v-2h4v-1H6V8h2V7h2v1h2v2zm4 6.25-2-2h4l-2 2zM14 10l2-2 2 2h-4z\"/>")
      .name("PriceChangeSharp")
  }
}

export default PriceChangeSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
