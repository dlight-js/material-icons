import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AccountBalanceSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z\"/>")
      .name("AccountBalanceSharp")
  }
}

export default AccountBalanceSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
