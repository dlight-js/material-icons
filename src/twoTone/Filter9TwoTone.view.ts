import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Filter9TwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 7h2v2h-2zM7 17h14V3H7v14zm4-4h4v-2h-2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4v-2z\" opacity=\".3\"/><path d=\"M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2zm14-10V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2h-4v2h4a2 2 0 0 0 2-2zm-4-4V7h2v2h-2z\"/>")
      .name("Filter9TwoTone")
  }
}

export default Filter9TwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
