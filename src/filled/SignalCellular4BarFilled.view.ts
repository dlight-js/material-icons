import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalCellular4BarFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 22h20V2z\"/>")
      .name("SignalCellular4BarFilled")
  }
}

export default SignalCellular4BarFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
