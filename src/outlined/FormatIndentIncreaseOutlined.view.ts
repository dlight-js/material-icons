import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatIndentIncreaseOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z\"/>")
      .name("FormatIndentIncreaseOutlined")
  }
}

export default FormatIndentIncreaseOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
