import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalCellular4BarOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 22h20V2L2 22z\"/>")
      .name("SignalCellular4BarOutlined")
  }
}

export default SignalCellular4BarOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
