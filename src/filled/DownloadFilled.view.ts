import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DownloadFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z\"/>")
      .name("DownloadFilled")
  }
}

export default DownloadFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
