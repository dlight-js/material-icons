import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Wifi1BarRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<circle cx=\"12\" cy=\"18\" r=\"2\"/>")
      .name("Wifi1BarRound")
  }
}

export default Wifi1BarRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
