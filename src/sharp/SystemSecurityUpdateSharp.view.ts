import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SystemSecurityUpdateSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 1v22h14V1H5zm12 17H7V6h10v12zm-1-6h-3V8h-2v4H8l4 4 4-4z\"/>")
      .name("SystemSecurityUpdateSharp")
  }
}

export default SystemSecurityUpdateSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
