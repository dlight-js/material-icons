import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VideoCameraFrontSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 10.48V4H2v16h16v-6.48l4 3.98v-11l-4 3.98zM10 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8H6v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 14 15.43V16z\"/>")
      .name("VideoCameraFrontSharp")
  }
}

export default VideoCameraFrontSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
