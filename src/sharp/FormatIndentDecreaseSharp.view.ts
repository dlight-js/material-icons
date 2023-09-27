import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FormatIndentDecreaseSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M11 17h10v-2H11v2zm-8-5 4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z\"/>")
      .name("FormatIndentDecreaseSharp")
  }
}

export default FormatIndentDecreaseSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>