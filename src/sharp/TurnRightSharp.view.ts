import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TurnRightSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m17.17 11-1.58 1.59L17 14l4-4-4-4-1.41 1.41L17.17 9H7v11h2v-9z\"/>")
      .name("TurnRightSharp")
  }
}

export default TurnRightSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
