import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TopicSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m12 6-2-2H2v16h20V6H12zm2 10H6v-2h8v2zm4-4H6v-2h12v2z\"/>")
      .name("TopicSharp")
  }
}

export default TopicSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
