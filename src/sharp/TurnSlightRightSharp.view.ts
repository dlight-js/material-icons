import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TurnSlightRightSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12.34 6V4H18v5.66h-2V7.41l-5 5V20H9v-8.41L14.59 6z\"/>")
      .name("TurnSlightRightSharp")
  }
}

export default TurnSlightRightSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
