import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NearMeDisabledSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 6.34 21 3l-3.34 9L12 6.34zm10.61 13.44L4.22 1.39 2.81 2.81l5.07 5.07L3 9.69v1.41l7.07 2.83L12.9 21h1.41l1.81-4.88 5.07 5.07 1.42-1.41z\"/>")
      .name("NearMeDisabledSharp")
  }
}

export default NearMeDisabledSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
