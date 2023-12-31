import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CurrencyFrancTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z\"/>")
      .name("CurrencyFrancTwoTone")
  }
}

export default CurrencyFrancTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
