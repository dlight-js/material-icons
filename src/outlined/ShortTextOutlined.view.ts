import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ShortTextOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 9h16v2H4V9zm0 4h10v2H4v-2z\"/>")
      .name("ShortTextOutlined")
  }
}

export default ShortTextOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
