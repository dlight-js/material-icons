import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SimCardAlertOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V8.83L10.83 4H18v16z\"/><path d=\"M11 15h2v2h-2zm0-7h2v5h-2z\"/>")
      .name("SimCardAlertOutlined")
  }
}

export default SimCardAlertOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
