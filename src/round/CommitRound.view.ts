import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CommitRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 13c.55 0 1-.45 1-1s-.45-1-1-1h-4.1a5 5 0 0 0-9.8 0H3c-.55 0-1 .45-1 1s.45 1 1 1h4.1a5 5 0 0 0 9.8 0H21zm-9 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"/>")
      .name("CommitRound")
  }
}

export default CommitRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
