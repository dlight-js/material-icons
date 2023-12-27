import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TransformSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v10h10v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V6h-8v2z\"/>")
      .name("TransformSharp")
  }
}

export default TransformSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
