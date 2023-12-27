import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AlignVerticalTopSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 2v2H2V2h20zM7 22h3V6H7v16zm7-6h3V6h-3v10z\"/>")
      .name("AlignVerticalTopSharp")
  }
}

export default AlignVerticalTopSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
