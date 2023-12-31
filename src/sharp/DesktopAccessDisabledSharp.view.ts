import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DesktopAccessDisabledSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M1.41 1.69 0 3.1l1 .99V18h9v2H8v2h8v-2h-2v-2h.9l6 6 1.41-1.41-20.9-20.9zM2.99 16V6.09L12.9 16H2.99zM4.55 2l2 2H21v12h-2.45l2 2h2.44V2z\"/>")
      .name("DesktopAccessDisabledSharp")
  }
}

export default DesktopAccessDisabledSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
