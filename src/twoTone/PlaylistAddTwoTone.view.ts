import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PlaylistAddTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z\"/>")
      .name("PlaylistAddTwoTone")
  }
}

export default PlaylistAddTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
