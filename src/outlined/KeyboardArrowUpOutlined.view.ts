import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class KeyboardArrowUpOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z\"/>")
      .name("KeyboardArrowUpOutlined")
  }
}

export default KeyboardArrowUpOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
