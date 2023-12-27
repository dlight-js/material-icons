import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class KeyboardReturnTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z\"/>")
      .name("KeyboardReturnTwoTone")
  }
}

export default KeyboardReturnTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
