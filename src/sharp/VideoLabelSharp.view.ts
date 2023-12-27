import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VideoLabelSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M23 3H1v18h22V3zm-2 13H3V5h18v11z\"/>")
      .name("VideoLabelSharp")
  }
}

export default VideoLabelSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
