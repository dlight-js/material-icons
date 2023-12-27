import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalCellularAlt1BarSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 14h3v6H5v-6z\"/>")
      .name("SignalCellularAlt1BarSharp")
  }
}

export default SignalCellularAlt1BarSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
