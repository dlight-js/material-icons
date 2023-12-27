import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PolylineFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6z\"/>")
      .name("PolylineFilled")
  }
}

export default PolylineFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
