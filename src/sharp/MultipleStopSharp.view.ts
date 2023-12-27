import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MultipleStopSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m17 4 4 4-4 4V9h-4V7h4V4zM7 17h4v-2H7v-3l-4 4 4 4v-3zm12-2h-2v2h2v-2zm-4 0h-2v2h2v-2zm-4-8H9v2h2V7zM7 7H5v2h2V7z\"/>")
      .name("MultipleStopSharp")
  }
}

export default MultipleStopSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
