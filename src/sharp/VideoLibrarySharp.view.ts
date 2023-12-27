import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VideoLibrarySharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zM12 14.5v-9l6 4.5-6 4.5z\"/>")
      .name("VideoLibrarySharp")
  }
}

export default VideoLibrarySharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
