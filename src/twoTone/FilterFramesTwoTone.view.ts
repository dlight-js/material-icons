import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FilterFramesTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M8 10h8v6H8z\" opacity=\".3\"/><path d=\"M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM6 18h12V8H6v10zm2-8h8v6H8v-6z\"/>")
      .name("FilterFramesTwoTone")
  }
}

export default FilterFramesTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
