import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ExpandMoreTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z\"/>")
      .name("ExpandMoreTwoTone")
  }
}

export default ExpandMoreTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
