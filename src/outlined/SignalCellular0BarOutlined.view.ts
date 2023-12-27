import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SignalCellular0BarOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 22h20V2L2 22zm18-2H6.83L20 6.83V20z\"/>")
      .name("SignalCellular0BarOutlined")
  }
}

export default SignalCellular0BarOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
