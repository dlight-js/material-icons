import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class KeyboardArrowDownTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z\"/>")
      .name("KeyboardArrowDownTwoTone")
  }
}

export default KeyboardArrowDownTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
