import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DesktopWindowsFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6v2H8v2h8v-2h-2v-2h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2\"/>")
      .name("DesktopWindowsFilled")
  }
}

export default DesktopWindowsFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
