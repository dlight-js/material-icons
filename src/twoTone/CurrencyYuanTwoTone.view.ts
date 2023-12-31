import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CurrencyYuanTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13.28 12H18v2h-5v7h-2v-7H6v-2h4.72L5 3h2.37L12 10.29 16.63 3H19z\"/>")
      .name("CurrencyYuanTwoTone")
  }
}

export default CurrencyYuanTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
