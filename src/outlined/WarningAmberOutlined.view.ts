import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WarningAmberOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z\"/>")
      .name("WarningAmberOutlined")
  }
}

export default WarningAmberOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
