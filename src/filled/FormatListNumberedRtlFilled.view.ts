import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatListNumberedRtlFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 17h2v.5h-1v1h1v.5h-2v1h3v-4h-3zm1-9h1V4h-2v1h1zm-1 3h1.8L18 13.1v.9h3v-1h-1.8l1.8-2.1V10h-3zM2 5h14v2H2zm0 12h14v2H2zm0-6h14v2H2z\"/>")
      .name("FormatListNumberedRtlFilled")
  }
}

export default FormatListNumberedRtlFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
