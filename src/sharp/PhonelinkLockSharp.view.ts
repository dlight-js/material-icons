import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PhonelinkLockSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 1H7v5h2V4h10v16H9v-2H7v5h14V1zM10.8 11V9.5C10.8 8.1 9.4 7 8 7S5.2 8.1 5.2 9.5V11H4v6h8v-6h-1.2zm-1.3 0h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3V11z\"/>")
      .name("PhonelinkLockSharp")
  }
}

export default PhonelinkLockSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>