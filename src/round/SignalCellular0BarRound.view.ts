import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalCellular0BarRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4.41 22H21c.55 0 1-.45 1-1V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71zM20 20H6.83L20 6.83V20z\"/>")
      .name("SignalCellular0BarRound")
  }
}

export default SignalCellular0BarRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
