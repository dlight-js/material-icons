import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CallMissedFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19.59 7 12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z\"/>")
      .name("CallMissedFilled")
  }
}

export default CallMissedFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
