import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AlignHorizontalLeftFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 22H2V2h2v20zM22 7H6v3h16V7zm-6 7H6v3h10v-3z\"/>")
      .name("AlignHorizontalLeftFilled")
  }
}

export default AlignHorizontalLeftFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
