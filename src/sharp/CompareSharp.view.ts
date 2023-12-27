import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CompareSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 3H3v18h7v2h2V1h-2v2zm0 15H5l5-6v6zM21 3h-7v2h5v13l-5-6v9h7V3z\"/>")
      .name("CompareSharp")
  }
}

export default CompareSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
