import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SecurityUpdateFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2zm12 15H7V6h10v12zm-1-6h-3V8h-2v4H8l4 4 4-4z\"/>")
      .name("SecurityUpdateFilled")
  }
}

export default SecurityUpdateFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
