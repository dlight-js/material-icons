import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SimCardDownloadSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 2H10L4 8v14h16V2zm-8 15-4-4h3V9.02L13 9v4h3l-4 4z\"/>")
      .name("SimCardDownloadSharp")
  }
}

export default SimCardDownloadSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
