import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatQuoteSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 17h3l2-4V7H4v6h3l-2 4zm10 0h3l2-4V7h-6v6h3l-2 4z\"/>")
      .name("FormatQuoteSharp")
  }
}

export default FormatQuoteSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
