import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FitScreenSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 4h5v5h-2V6h-3V4zM4 9V6h3V4H2v5h2zm16 6v3h-3v2h5v-5h-2zM7 18H4v-3H2v5h5v-2zM18 8H6v8h12V8z\"/>")
      .name("FitScreenSharp")
  }
}

export default FitScreenSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
