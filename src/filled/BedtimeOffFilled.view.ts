import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BedtimeOffFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21.19 21.19 2.81 2.81 1.39 4.22l2.27 2.27A9.959 9.959 0 0 0 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.62 5.51-1.66l2.27 2.27 1.41-1.42zM12.34 2.02c-2.18-.07-4.19.55-5.85 1.64l4.59 4.59c-.27-2.05.1-4.22 1.26-6.23z\"/>")
      .name("BedtimeOffFilled")
  }
}

export default BedtimeOffFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
