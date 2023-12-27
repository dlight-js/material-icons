import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PlayArrowFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M8 5v14l11-7z\"/>")
      .name("PlayArrowFilled")
  }
}

export default PlayArrowFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
