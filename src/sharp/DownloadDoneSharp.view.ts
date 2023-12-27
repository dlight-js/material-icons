import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DownloadDoneSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 18h14v2H5v-2zm4.6-2.7L5 10.7l2-1.9 2.6 2.6L17 4l2 2-9.4 9.3z\"/>")
      .name("DownloadDoneSharp")
  }
}

export default DownloadDoneSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
