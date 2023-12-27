import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PlayCircleFilledOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z\"/>")
      .name("PlayCircleFilledOutlined")
  }
}

export default PlayCircleFilledOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
