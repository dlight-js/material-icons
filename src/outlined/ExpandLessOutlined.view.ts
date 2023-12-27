import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ExpandLessOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z\"/>")
      .name("ExpandLessOutlined")
  }
}

export default ExpandLessOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
