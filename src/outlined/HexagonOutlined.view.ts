import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HexagonOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9-5.2-9zm-1.15 16h-8.1l-4.04-7 4.04-7h8.09l4.04 7-4.03 7z\"/>")
      .name("HexagonOutlined")
  }
}

export default HexagonOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
