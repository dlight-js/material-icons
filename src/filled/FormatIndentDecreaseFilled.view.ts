import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatIndentDecreaseFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11 17h10v-2H11v2zm-8-5 4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z\"/>")
      .name("FormatIndentDecreaseFilled")
  }
}

export default FormatIndentDecreaseFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
