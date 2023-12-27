import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SwapHorizSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z\"/>")
      .name("SwapHorizSharp")
  }
}

export default SwapHorizSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
