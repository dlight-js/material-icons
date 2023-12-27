import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ExplicitSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3H3v18h18V3zm-6 6h-4v2h4v2h-4v2h4v2H9V7h6v2z\"/>")
      .name("ExplicitSharp")
  }
}

export default ExplicitSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
