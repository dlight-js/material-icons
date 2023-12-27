import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DragHandleRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 9H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1z\"/>")
      .name("DragHandleRound")
  }
}

export default DragHandleRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
