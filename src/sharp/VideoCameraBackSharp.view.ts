import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VideoCameraBackSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 10.48V4H2v16h16v-6.48l4 3.98v-11l-4 3.98zM5 16l2.38-3.17L9 15l2.62-3.5L15 16H5z\"/>")
      .name("VideoCameraBackSharp")
  }
}

export default VideoCameraBackSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
