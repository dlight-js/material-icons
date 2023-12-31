import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RadioOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 6H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-1.11-.89-2-2-2zm0 2v3h-2V9h-2v2H4V8h16zM4 20v-7h16v7H4z\"/><circle cx=\"8\" cy=\"16.48\" r=\"2.5\"/>")
      .name("RadioOutlined")
  }
}

export default RadioOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
