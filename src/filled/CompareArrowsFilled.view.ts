import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CompareArrowsFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z\"/>")
      .name("CompareArrowsFilled")
  }
}

export default CompareArrowsFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
