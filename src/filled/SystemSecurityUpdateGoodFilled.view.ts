import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SystemSecurityUpdateGoodFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 17H7V6h10v12zm-1-7.95-1.41-1.41-3.54 3.54-1.41-1.41-1.41 1.41L11.05 15 16 10.05z\"/>")
      .name("SystemSecurityUpdateGoodFilled")
  }
}

export default SystemSecurityUpdateGoodFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
