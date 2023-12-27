import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ArrowDropDownTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m7 10 5 5 5-5H7z\"/>")
      .name("ArrowDropDownTwoTone")
  }
}

export default ArrowDropDownTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
