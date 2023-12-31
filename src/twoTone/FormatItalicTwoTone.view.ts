import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatItalicTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 15v3h8v-3h-2.21l3.42-8H18V4h-8v3h2.21l-3.42 8z\"/>")
      .name("FormatItalicTwoTone")
  }
}

export default FormatItalicTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
