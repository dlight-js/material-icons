import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class KeyboardArrowLeftTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z\"/>")
      .name("KeyboardArrowLeftTwoTone")
  }
}

export default KeyboardArrowLeftTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
