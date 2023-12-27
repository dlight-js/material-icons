import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalCellularAltSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-5h3v11h-3V9z\"/>")
      .name("SignalCellularAltSharp")
  }
}

export default SignalCellularAltSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
