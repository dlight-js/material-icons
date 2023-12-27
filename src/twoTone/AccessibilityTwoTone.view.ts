import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AccessibilityTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z\"/>")
      .name("AccessibilityTwoTone")
  }
}

export default AccessibilityTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
