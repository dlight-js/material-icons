import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CircleNotificationsRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5zm4-2.5H8c-.55 0-1-.45-1-1s.45-1 1-1v-3c0-1.86 1.28-3.41 3-3.86V6.5c0-.55.45-1 1-1s1 .45 1 1v.64c1.72.45 3 2 3 3.86v3c.55 0 1 .45 1 1s-.45 1-1 1z\"/>")
      .name("CircleNotificationsRound")
  }
}

export default CircleNotificationsRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
