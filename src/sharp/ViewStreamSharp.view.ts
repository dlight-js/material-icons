import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewStreamSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 19v-6h18v6H3zM3 5v6h18V5H3z\"/>")
      .name("ViewStreamSharp")
  }
}

export default ViewStreamSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
