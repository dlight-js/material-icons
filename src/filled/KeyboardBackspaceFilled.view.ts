import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class KeyboardBackspaceFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z\"/>")
      .name("KeyboardBackspaceFilled")
  }
}

export default KeyboardBackspaceFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
