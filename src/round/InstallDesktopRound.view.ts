import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class InstallDesktopRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 17H4V5h8V3H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h4c1.1 0 2-.9 2-2v-3h-2v3z\"/><path d=\"M17.71 13.29 21.3 9.7a.996.996 0 1 0-1.41-1.41L18 10.17V4c0-.55-.45-1-1-1s-1 .45-1 1v6.17l-1.89-1.88A.996.996 0 1 0 12.7 9.7l3.59 3.59c.4.39 1.03.39 1.42 0z\"/>")
      .name("InstallDesktopRound")
  }
}

export default InstallDesktopRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
