import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FemaleRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 6c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm1 8.91a5.5 5.5 0 0 0 4.5-5.41C17.5 6.46 15.04 4 12 4S6.5 6.46 6.5 9.5a5.5 5.5 0 0 0 4.5 5.41V17h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2.09z\"/>")
      .name("FemaleRound")
  }
}

export default FemaleRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
