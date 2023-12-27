import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ShortTextFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 9h16v2H4V9zm0 4h10v2H4v-2z\"/>")
      .name("ShortTextFilled")
  }
}

export default ShortTextFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
