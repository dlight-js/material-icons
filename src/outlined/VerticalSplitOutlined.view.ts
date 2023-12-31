import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VerticalSplitOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm16 2v10h-4V7h4m2-2h-8v14h8V5z\"/>")
      .name("VerticalSplitOutlined")
  }
}

export default VerticalSplitOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
