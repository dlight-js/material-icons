import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PentagonOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44l7.63 5.34zM2 9l4 12h12l4-12-10-7L2 9z\"/>")
      .name("PentagonOutlined")
  }
}

export default PentagonOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
