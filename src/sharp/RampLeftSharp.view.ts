import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RampLeftSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 21h-2V6.83L9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V9c0 4.27 4.03 7.13 6 8.27l-1.46 1.46c-1.91-1.16-3.44-2.53-4.54-4.02V21z\"/>")
      .name("RampLeftSharp")
  }
}

export default RampLeftSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
