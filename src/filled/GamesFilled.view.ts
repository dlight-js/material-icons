import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class GamesFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z\"/>")
      .name("GamesFilled")
  }
}

export default GamesFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
