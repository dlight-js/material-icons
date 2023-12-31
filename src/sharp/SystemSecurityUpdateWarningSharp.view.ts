import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SystemSecurityUpdateWarningSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11 15h2v2h-2zm0-8h2v6h-2z\"/><path d=\"M5.01 1v22H19V1H5.01zM17 18H7V6h10v12z\"/>")
      .name("SystemSecurityUpdateWarningSharp")
  }
}

export default SystemSecurityUpdateWarningSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
