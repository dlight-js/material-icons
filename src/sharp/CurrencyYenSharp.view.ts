import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CurrencyYenSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13.92 11H18v2h-5v2h5v2h-5v4h-2v-4H6v-2h5v-2H6v-2h4.08L5 3h2.37L12 10.29 16.63 3H19z\"/>")
      .name("CurrencyYenSharp")
  }
}

export default CurrencyYenSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
