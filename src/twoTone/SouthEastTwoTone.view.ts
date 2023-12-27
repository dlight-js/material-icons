import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SouthEastTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10V9z\"/>")
      .name("SouthEastTwoTone")
  }
}

export default SouthEastTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
