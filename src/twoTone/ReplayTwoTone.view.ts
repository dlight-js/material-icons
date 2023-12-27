import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ReplayTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m7 6 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8V1L7 6z\"/>")
      .name("ReplayTwoTone")
  }
}

export default ReplayTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
