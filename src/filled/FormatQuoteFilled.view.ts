import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatQuoteFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z\"/>")
      .name("FormatQuoteFilled")
  }
}

export default FormatQuoteFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
