import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SystemSecurityUpdateGoodSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 1v22h14V1H5zm12 17H7V6h10v12zm-1-7.95-1.41-1.41-3.54 3.54-1.41-1.41-1.41 1.41L11.05 15 16 10.05z\"/>")
      .name("SystemSecurityUpdateGoodSharp")
  }
}

export default SystemSecurityUpdateGoodSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
