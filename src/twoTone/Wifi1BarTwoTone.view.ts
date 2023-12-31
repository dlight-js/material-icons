import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Wifi1BarTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15.53 17.46 12 21l-3.53-3.54c.9-.9 2.15-1.46 3.53-1.46s2.63.56 3.53 1.46z\"/>")
      .name("Wifi1BarTwoTone")
  }
}

export default Wifi1BarTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
