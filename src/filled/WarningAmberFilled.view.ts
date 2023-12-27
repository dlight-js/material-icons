import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class WarningAmberFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2z\"/><path d=\"M13 16h-2v2h2zm0-6h-2v5h2z\"/>")
      .name("WarningAmberFilled")
  }
}

export default WarningAmberFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
