import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TextsmsSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 2H2.01L2 22l4-4h16V2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z\"/>")
      .name("TextsmsSharp")
  }
}

export default TextsmsSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
