import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BatteryStdRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.34 22h7.32c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z\"/>")
      .name("BatteryStdRound")
  }
}

export default BatteryStdRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
