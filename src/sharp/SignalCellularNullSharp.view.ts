import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalCellularNullSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 6.83V20H6.83L20 6.83M22 2 2 22h20V2z\"/>")
      .name("SignalCellularNullSharp")
  }
}

export default SignalCellularNullSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
