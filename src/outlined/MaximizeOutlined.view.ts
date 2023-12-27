import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MaximizeOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 3h18v2H3V3z\"/>")
      .name("MaximizeOutlined")
  }
}

export default MaximizeOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
