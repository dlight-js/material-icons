import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EqualizerFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z\"/>")
      .name("EqualizerFilled")
  }
}

export default EqualizerFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
