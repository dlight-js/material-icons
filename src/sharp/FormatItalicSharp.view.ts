import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatItalicSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z\"/>")
      .name("FormatItalicSharp")
  }
}

export default FormatItalicSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
