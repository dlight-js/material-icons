import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SplitscreenRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 4v5H6V4h12zm0-2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 13v5H6v-5h12zm0-2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2z\"/>")
      .name("SplitscreenRound")
  }
}

export default SplitscreenRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
