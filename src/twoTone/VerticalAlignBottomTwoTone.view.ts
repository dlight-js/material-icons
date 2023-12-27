import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VerticalAlignBottomTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11 3v10H8l4 4 4-4h-3V3zM4 19h16v2H4z\"/>")
      .name("VerticalAlignBottomTwoTone")
  }
}

export default VerticalAlignBottomTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
