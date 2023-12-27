import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FormatIndentDecreaseTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 16V8l-4 4zm4-9h10v2H11zm0 4h10v2H11zm0 4h10v2H11zm-8 4h18v2H3zM3 3h18v2H3z\"/>")
      .name("FormatIndentDecreaseTwoTone")
  }
}

export default FormatIndentDecreaseTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
