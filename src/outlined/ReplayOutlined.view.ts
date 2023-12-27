import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ReplayOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z\"/>")
      .name("ReplayOutlined")
  }
}

export default ReplayOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
