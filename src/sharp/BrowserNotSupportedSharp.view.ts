import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BrowserNotSupportedSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 6v10.5l2 2V4H6.5l2 2zM3.22 3.32 1.95 4.59 3 5.64V20h14.36l2.06 2.06 1.27-1.27L3.22 3.32zM15 18H5V7.64L15.36 18H15z\"/>")
      .name("BrowserNotSupportedSharp")
  }
}

export default BrowserNotSupportedSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
