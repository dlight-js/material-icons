import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ContentCopySharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 1H2v16h2V3h12V1zm5 4H6v18h15V5zm-2 16H8V7h11v14z\"/>")
      .name("ContentCopySharp")
  }
}

export default ContentCopySharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
