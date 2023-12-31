import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ShoppingBasketSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m17.21 9-4.39-6.57a1 1 0 0 0-1.66 0L6.77 9H.69L4 21h16.02l3.29-12h-6.1zm-5.22-4.21L14.8 9H9.18l2.81-4.21zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"/>")
      .name("ShoppingBasketSharp")
  }
}

export default ShoppingBasketSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
