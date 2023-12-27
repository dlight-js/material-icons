import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalWifiStatusbar4BarTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98A16.88 16.88 0 0 0 12 4z\"/>")
      .name("SignalWifiStatusbar4BarTwoTone")
  }
}

export default SignalWifiStatusbar4BarTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
