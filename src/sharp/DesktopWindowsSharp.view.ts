import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DesktopWindowsSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M23 2H1v16h9v2H8v2h8v-2h-2v-2h9V2zm-2 14H3V4h18v12z\"/>")
      .name("DesktopWindowsSharp")
  }
}

export default DesktopWindowsSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
