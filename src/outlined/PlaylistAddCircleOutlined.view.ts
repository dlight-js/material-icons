import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PlaylistAddCircleOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2-10H7v2h7v-2zm0-3H7v2h7V7zm-7 8h3v-2H7v2zm12-2v2h-2v2h-2v-2h-2v-2h2v-2h2v2h2z\"/>")
      .name("PlaylistAddCircleOutlined")
  }
}

export default PlaylistAddCircleOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
