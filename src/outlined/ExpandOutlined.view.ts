import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ExpandOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 20h16v2H4zM4 2h16v2H4zm5.41 11.59L8 15l4 4 4-4-1.41-1.41L13 15.17V8.83l1.59 1.58L16 9l-4-4-4 4 1.41 1.41L11 8.83v6.34z\"/>")
      .name("ExpandOutlined")
  }
}

export default ExpandOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
