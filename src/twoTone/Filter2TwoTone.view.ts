import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Filter2TwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 17h14V3H7v14zm4-6a2 2 0 0 1 2-2h2V7h-4V5h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4v2h-6v-4z\" opacity=\".3\"/><path d=\"M17 13h-4v-2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4v2h4v2h-2a2 2 0 0 0-2 2v4h6v-2zm4-12H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM1 21c0 1.1.9 2 2 2h16v-2H3V5H1v16z\"/>")
      .name("Filter2TwoTone")
  }
}

export default Filter2TwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
