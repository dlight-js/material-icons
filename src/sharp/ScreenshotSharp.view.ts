import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ScreenshotSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 1v22h14V1H5zm12 17H7V6h10v12zM9.5 8.5H12V7H8v4h1.5V8.5zM12 17h4v-4h-1.5v2.5H12V17z\"/>")
      .name("ScreenshotSharp")
  }
}

export default ScreenshotSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
