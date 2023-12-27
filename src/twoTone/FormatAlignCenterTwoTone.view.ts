import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatAlignCenterTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 3h18v2H3zm4 12h10v2H7zm0-8h10v2H7zm-4 4h18v2H3zm0 8h18v2H3z\"/>")
      .name("FormatAlignCenterTwoTone")
  }
}

export default FormatAlignCenterTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
