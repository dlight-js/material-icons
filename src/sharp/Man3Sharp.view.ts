import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Man3Sharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 7H8v8h2v7h4v-7h2zm-4-5.249L14.248 4 12 6.248 9.75 4z\"/>")
      .name("Man3Sharp")
  }
}

export default Man3Sharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
