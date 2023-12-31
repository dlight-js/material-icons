import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FactorySharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 10v12H2V10l7-3v2l5-2v3h8zm-4.8-1.5L18 2h3l.8 6.5h-4.6zM11 18h2v-4h-2v4zm-4 0h2v-4H7v4zm10-4h-2v4h2v-4z\"/>")
      .name("FactorySharp")
  }
}

export default FactorySharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
