import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalCellularAlt1BarRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6.5 20c-.83 0-1.5-.67-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5z\"/>")
      .name("SignalCellularAlt1BarRound")
  }
}

export default SignalCellularAlt1BarRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
