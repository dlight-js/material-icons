import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PlayArrowTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 8.64v6.72L15.27 12z\" opacity=\".3\"/><path d=\"m8 19 11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z\"/>")
      .name("PlayArrowTwoTone")
  }
}

export default PlayArrowTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
