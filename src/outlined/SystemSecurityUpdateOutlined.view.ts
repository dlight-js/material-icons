import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SystemSecurityUpdateOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zM7 4V3h10v1H7zm9 8-4 4-4-4 1.41-1.41L11 12.17V8h2v4.17l1.59-1.59L16 12z\"/>")
      .name("SystemSecurityUpdateOutlined")
  }
}

export default SystemSecurityUpdateOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
