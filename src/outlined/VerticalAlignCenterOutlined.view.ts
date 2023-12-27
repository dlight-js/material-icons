import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VerticalAlignCenterOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z\"/>")
      .name("VerticalAlignCenterOutlined")
  }
}

export default VerticalAlignCenterOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
