import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AlignVerticalBottomFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z\"/>")
      .name("AlignVerticalBottomFilled")
  }
}

export default AlignVerticalBottomFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
