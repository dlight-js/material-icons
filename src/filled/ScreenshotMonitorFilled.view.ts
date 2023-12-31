import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ScreenshotMonitorFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 14H4V5h16v12z\"/><path d=\"M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z\"/>")
      .name("ScreenshotMonitorFilled")
  }
}

export default ScreenshotMonitorFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
