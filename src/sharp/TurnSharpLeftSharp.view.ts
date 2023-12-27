import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TurnSharpLeftSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6 6.83 4.41 8.41 3 7l4-4 4 4-1.41 1.41L8 6.83V13h10v8h-2v-6H6z\"/>")
      .name("TurnSharpLeftSharp")
  }
}

export default TurnSharpLeftSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
