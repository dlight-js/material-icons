import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatLineSpacingTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M10 5h12v2H10zm0 12h12v2H10zm-8.5 0L5 20.5 8.5 17H6V7h2.5L5 3.5 1.5 7H4v10zm8.5-6h12v2H10z\"/>")
      .name("FormatLineSpacingTwoTone")
  }
}

export default FormatLineSpacingTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
