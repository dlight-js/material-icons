import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WindowSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z\"/>")
      .name("WindowSharp")
  }
}

export default WindowSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
