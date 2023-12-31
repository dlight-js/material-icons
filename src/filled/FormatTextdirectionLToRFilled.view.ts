import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatTextdirectionLToRFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm12 8-4-4v3H5v2h12v3l4-4z\"/>")
      .name("FormatTextdirectionLToRFilled")
  }
}

export default FormatTextdirectionLToRFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
