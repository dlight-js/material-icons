import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ImageAspectRatioTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 18h16V6H4v12zm10-8h2v2h-2v-2zm0 4h2v2h-2v-2zm-4-4h2v2h-2v-2zm-4 0h2v2H6v-2z\" opacity=\".3\"/><path d=\"M14 10h2v2h-2zm0 4h2v2h-2zm-8-4h2v2H6zm4 0h2v2h-2zm10-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z\"/>")
      .name("ImageAspectRatioTwoTone")
  }
}

export default ImageAspectRatioTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
