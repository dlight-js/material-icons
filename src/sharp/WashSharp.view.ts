import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WashSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9.12 5 1 12.68V23h18v-2.5h-7v-1h9V17h-9v-1h10v-2.5H12v-1h8V10H8.86l1.88-3.3L9.12 5zm4.38 4c.83 0 1.5-.67 1.5-1.5 0-.84-1.5-2.5-1.5-2.5S12 6.66 12 7.5c0 .83.67 1.5 1.5 1.5zm5-8S16 3.83 16 5.5a2.5 2.5 0 0 0 5 0C21 3.83 18.5 1 18.5 1z\"/>")
      .name("WashSharp")
  }
}

export default WashSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
