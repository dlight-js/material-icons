import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RectangleOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 4v16h20V4H2zm18 14H4V6h16v12z\"/>")
      .name("RectangleOutlined")
  }
}

export default RectangleOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
