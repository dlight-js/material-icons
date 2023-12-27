import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalCellular4BarSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 22h20V2L2 22z\"/>")
      .name("SignalCellular4BarSharp")
  }
}

export default SignalCellular4BarSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
