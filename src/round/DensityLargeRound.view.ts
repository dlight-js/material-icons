import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DensityLargeRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm16 14H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1z\"/>")
      .name("DensityLargeRound")
  }
}

export default DensityLargeRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
