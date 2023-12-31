import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BorderOuterOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z\"/>")
      .name("BorderOuterOutlined")
  }
}

export default BorderOuterOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
