import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatAlignLeftFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z\"/>")
      .name("FormatAlignLeftFilled")
  }
}

export default FormatAlignLeftFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
