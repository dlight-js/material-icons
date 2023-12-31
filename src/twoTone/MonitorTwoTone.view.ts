import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MonitorTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z\"/><path d=\"M4 5h16v11H4z\" opacity=\".3\"/>")
      .name("MonitorTwoTone")
  }
}

export default MonitorTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
