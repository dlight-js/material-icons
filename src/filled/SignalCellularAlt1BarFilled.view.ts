import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalCellularAlt1BarFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 14h3v6H5v-6z\"/>")
      .name("SignalCellularAlt1BarFilled")
  }
}

export default SignalCellularAlt1BarFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
