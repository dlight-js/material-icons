import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SpaceBarTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 13H6V9H4v6h16V9h-2z\"/>")
      .name("SpaceBarTwoTone")
  }
}

export default SpaceBarTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
