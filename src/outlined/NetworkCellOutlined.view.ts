import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NetworkCellOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 22h20V2L2 22zm18-2h-3V9.83l3-3V20z\"/>")
      .name("NetworkCellOutlined")
  }
}

export default NetworkCellOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
