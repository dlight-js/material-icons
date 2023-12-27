import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CallMadeRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 6c0 .56.45 1 1 1h5.59L4.7 17.89a.996.996 0 1 0 1.41 1.41L17 8.41V14c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1z\"/>")
      .name("CallMadeRound")
  }
}

export default CallMadeRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
