import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class QuickreplySharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 2H2v20l4-4h9v-8h7z\"/><path d=\"M22.5 16h-2.2l1.7-4h-5v6h2v5z\"/>")
      .name("QuickreplySharp")
  }
}

export default QuickreplySharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
