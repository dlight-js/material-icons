import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalCellularAlt2BarTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 14h3v6H5v-6zm6-5h3v11h-3V9z\"/>")
      .name("SignalCellularAlt2BarTwoTone")
  }
}

export default SignalCellularAlt2BarTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
