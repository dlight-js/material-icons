import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalCellularNoSimSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 3h-9L7.95 5.06 19 16.11zm-15.21.74L2.38 5.15 5 7.77V21h13.23l1.62 1.62 1.41-1.41z\"/>")
      .name("SignalCellularNoSimSharp")
  }
}

export default SignalCellularNoSimSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
