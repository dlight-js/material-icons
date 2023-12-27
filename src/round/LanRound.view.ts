import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LanRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 22h4c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2h-1v-2c0-1.1-.9-2-2-2h-3V9h1c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v2H8c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2H8v-2h8v2h-1c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2z\"/>")
      .name("LanRound")
  }
}

export default LanRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
