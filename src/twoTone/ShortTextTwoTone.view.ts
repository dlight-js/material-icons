import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ShortTextTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 9h16v2H4zm0 4h10v2H4z\"/>")
      .name("ShortTextTwoTone")
  }
}

export default ShortTextTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
