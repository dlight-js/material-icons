import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RepeatOnFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path fill-rule=\"evenodd\" d=\"M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z\"/>")
      .name("RepeatOnFilled")
  }
}

export default RepeatOnFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
