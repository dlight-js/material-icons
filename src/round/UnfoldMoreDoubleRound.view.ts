import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class UnfoldMoreDoubleRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9.53 5.29 12 2.83l2.46 2.46a.996.996 0 1 0 1.41-1.41L12.7.7a.996.996 0 0 0-1.41 0L8.12 3.88a.996.996 0 1 0 1.41 1.41z\"/><path d=\"M9.53 10.29 12 7.83l2.46 2.46a.996.996 0 1 0 1.41-1.41L12.7 5.7a.996.996 0 0 0-1.41 0L8.12 8.88a.996.996 0 1 0 1.41 1.41zm4.94 3.42L12 16.17l-2.46-2.46a.996.996 0 1 0-1.41 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.18a.996.996 0 1 0-1.41-1.41z\"/><path d=\"M14.47 18.72 12 21.17l-2.46-2.46a.996.996 0 1 0-1.41 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17a.996.996 0 1 0-1.41-1.41z\"/>")
      .name("UnfoldMoreDoubleRound")
  }
}

export default UnfoldMoreDoubleRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
