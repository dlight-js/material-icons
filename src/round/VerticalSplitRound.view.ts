import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VerticalSplitRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 15h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-8h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm11-1h6c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z\"/>")
      .name("VerticalSplitRound")
  }
}

export default VerticalSplitRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
