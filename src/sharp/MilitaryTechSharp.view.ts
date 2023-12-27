import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MilitaryTechSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 11V2H7v9l4.66 2.8-.99 2.34-3.41.29 2.59 2.24L9.07 22 12 20.23 14.93 22l-.78-3.33 2.59-2.24-3.41-.29-.99-2.34L17 11zm-4 1.23-1 .6-1-.6V3h2v9.23z\"/>")
      .name("MilitaryTechSharp")
  }
}

export default MilitaryTechSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
