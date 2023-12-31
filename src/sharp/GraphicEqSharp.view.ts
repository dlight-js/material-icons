import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class GraphicEqSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z\"/>")
      .name("GraphicEqSharp")
  }
}

export default GraphicEqSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
