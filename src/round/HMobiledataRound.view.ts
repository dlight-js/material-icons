import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HMobiledataRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 11H9V8c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1v-3h6v3c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v3z\"/>")
      .name("HMobiledataRound")
  }
}

export default HMobiledataRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
