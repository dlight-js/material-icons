import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SouthWestTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z\"/>")
      .name("SouthWestTwoTone")
  }
}

export default SouthWestTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
