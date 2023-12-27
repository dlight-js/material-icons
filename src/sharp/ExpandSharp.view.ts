import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ExpandSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 20h16v2H4v-2zM4 2h16v2H4V2zm9 7h3l-4-4-4 4h3v6H8l4 4 4-4h-3V9z\"/>")
      .name("ExpandSharp")
  }
}

export default ExpandSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
