import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalCellular0BarSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 22h20V2L2 22zm18-2H6.83L20 6.83V20z\"/>")
      .name("SignalCellular0BarSharp")
  }
}

export default SignalCellular0BarSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
