import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SourceOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-2-6H6v-2h12v2zm-4 4H6v-2h8v2z\"/>")
      .name("SourceOutlined")
  }
}

export default SourceOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
