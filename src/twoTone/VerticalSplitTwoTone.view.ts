import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VerticalSplitTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 7h4v10h-4z\" opacity=\".3\"/><path d=\"M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm10 0v14h8V5h-8zm6 12h-4V7h4v10z\"/>")
      .name("VerticalSplitTwoTone")
  }
}

export default VerticalSplitTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
