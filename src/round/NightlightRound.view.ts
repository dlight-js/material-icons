import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NightlightRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M11.57 2.3c2.38-.59 4.68-.27 6.63.64.35.16.41.64.1.86C15.7 5.6 14 8.6 14 12s1.7 6.4 4.3 8.2c.32.22.26.7-.09.86-1.28.6-2.71.94-4.21.94-6.05 0-10.85-5.38-9.87-11.6.61-3.92 3.59-7.16 7.44-8.1z\"/>")
      .name("NightlightRound")
  }
}

export default NightlightRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
