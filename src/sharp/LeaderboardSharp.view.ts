import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LeaderboardSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z\"/>")
      .name("LeaderboardSharp")
  }
}

export default LeaderboardSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
