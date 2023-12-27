import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class KeyboardOptionKeyFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 5h6v2h-6zM9 5H3v2h4.85l6.92 12H21v-2h-5.07z\"/>")
      .name("KeyboardOptionKeyFilled")
  }
}

export default KeyboardOptionKeyFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
