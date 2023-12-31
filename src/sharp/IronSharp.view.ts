import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class IronSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 6v8h-1V7H7v3h2V9h6v2H6c-2.21 0-4 1.79-4 4v3h15v-2h3V8h2V6h-4z\"/>")
      .name("IronSharp")
  }
}

export default IronSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
