import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class KeyboardBackspaceSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z\"/>")
      .name("KeyboardBackspaceSharp")
  }
}

export default KeyboardBackspaceSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
