import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalWifi4BarRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l10.08 12.56c.8 1 2.32 1 3.12 0L23.64 7z\"/>")
      .name("SignalWifi4BarRound")
  }
}

export default SignalWifi4BarRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
