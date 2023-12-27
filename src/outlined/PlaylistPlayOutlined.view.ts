import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PlaylistPlayOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z\"/>")
      .name("PlaylistPlayOutlined")
  }
}

export default PlaylistPlayOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
