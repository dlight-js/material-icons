import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VideoStableTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m7.063 13.319 1.32-4.926 8.558 2.293-1.32 4.926z\" opacity=\".3\"/><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V6h2.95l-2.33 8.73L16.82 18H4zm11.62-2.39-8.55-2.29L8.38 8.4l8.56 2.29-1.32 4.92zM20 18h-2.95l2.34-8.73L7.18 6H20v12z\"/>")
      .name("VideoStableTwoTone")
  }
}

export default VideoStableTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
