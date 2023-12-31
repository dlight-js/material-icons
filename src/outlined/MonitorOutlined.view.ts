import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MonitorOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z\"/>")
      .name("MonitorOutlined")
  }
}

export default MonitorOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
