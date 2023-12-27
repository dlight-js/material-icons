import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalCellularAltFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z\"/>")
      .name("SignalCellularAltFilled")
  }
}

export default SignalCellularAltFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
