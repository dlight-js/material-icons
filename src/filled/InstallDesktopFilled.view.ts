import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class InstallDesktopFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 17H4V5h8V3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-3h-2v3z\"/><path d=\"m17 14 5-5-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z\"/>")
      .name("InstallDesktopFilled")
  }
}

export default InstallDesktopFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
